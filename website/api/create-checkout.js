// Create Stripe Checkout — redirects user to Stripe payment page
// GET ?repo=owner/repo&plan=monthly|yearly|lifetime
// Redirects (303) to Stripe Checkout URL

const Stripe = require('stripe');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'GET only' });

  const { repo, plan } = req.query || {};
  if (!repo) return res.status(400).json({ error: 'repo parameter required' });
  if (!['monthly', 'yearly', 'lifetime'].includes(plan)) {
    return res.status(400).json({ error: 'plan must be monthly, yearly, or lifetime' });
  }

  const stripeKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeKey) return res.status(500).json({ error: 'Stripe not configured' });

  const priceMap = {
    monthly: process.env.STRIPE_PRICE_MONTHLY,
    yearly: process.env.STRIPE_PRICE_YEARLY,
    lifetime: process.env.STRIPE_PRICE_LIFETIME,
  };

  const priceId = priceMap[plan];
  if (!priceId) return res.status(500).json({ error: `Price ID not configured for ${plan}` });

  const stripe = new Stripe(stripeKey);
  const isRecurring = plan !== 'lifetime';

  try {
    const session = await stripe.checkout.sessions.create({
      mode: isRecurring ? 'subscription' : 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      metadata: { github_repo: repo, plan },
      success_url: `https://www.eonriskservices.com/buildmysite/success?repo=${encodeURIComponent(repo)}`,
      cancel_url: `https://www.eonriskservices.com/buildmysite/pricing?repo=${encodeURIComponent(repo)}`,
      allow_promotion_codes: true,
    });

    // Redirect to Stripe Checkout
    res.writeHead(303, { Location: session.url });
    res.end();
  } catch (err) {
    console.error('Stripe checkout error:', err);
    return res.status(500).json({ error: err.message });
  }
};
