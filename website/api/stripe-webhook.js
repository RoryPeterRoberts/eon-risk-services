// Stripe Webhook — handles payment events and updates site tiers
// POST (raw body) — called by Stripe
// Events: checkout.session.completed, customer.subscription.deleted, invoice.payment_failed

const Stripe = require('stripe');
const { supabase } = require('./_lib/supabase');

// Vercel: disable body parsing so we get the raw body for signature verification
module.exports.config = { api: { bodyParser: false } };

function getRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

  const stripeKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!stripeKey || !webhookSecret) {
    return res.status(500).json({ error: 'Stripe not configured' });
  }

  const stripe = new Stripe(stripeKey);
  const rawBody = await getRawBody(req);
  const sig = req.headers['stripe-signature'];

  let event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).json({ error: 'Invalid signature' });
  }

  // Idempotency check
  const { data: existing } = await supabase
    .from('billing_events')
    .select('id')
    .eq('stripe_event_id', event.id)
    .single();

  if (existing) {
    // Already processed
    return res.status(200).json({ received: true, duplicate: true });
  }

  // Log the event
  await supabase.from('billing_events').insert({
    stripe_event_id: event.id,
    event_type: event.type,
    payload: event.data.object
  });

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object;
        const repo = session.metadata?.github_repo;
        const plan = session.metadata?.plan;
        if (!repo) break;

        const tier = plan === 'lifetime' ? 'lifetime' : 'pro';
        const updateData = {
          tier,
          stripe_customer_id: session.customer || null,
          email: session.customer_email || null,
        };
        if (session.subscription) {
          updateData.stripe_subscription_id = session.subscription;
        }

        await supabase
          .from('sites')
          .update(updateData)
          .eq('github_repo', repo);

        console.log(`Upgraded ${repo} to ${tier}`);
        break;
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object;
        const customerId = subscription.customer;
        if (!customerId) break;

        // Find sites with this subscription and downgrade to free
        // But don't downgrade lifetime users
        await supabase
          .from('sites')
          .update({ tier: 'free', stripe_subscription_id: null })
          .eq('stripe_customer_id', customerId)
          .eq('tier', 'pro');

        console.log(`Downgraded subscription ${subscription.id} to free`);
        break;
      }

      case 'invoice.payment_failed': {
        // Log only — Stripe handles retries automatically
        const invoice = event.data.object;
        console.log(`Payment failed for invoice ${invoice.id}, customer ${invoice.customer}`);
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }
  } catch (err) {
    console.error(`Error handling ${event.type}:`, err);
    // Still return 200 so Stripe doesn't retry indefinitely
  }

  return res.status(200).json({ received: true });
};
