const { supabase } = require('./_lib/supabase');
const { resend } = require('./_lib/resend');
const { rateLimit } = require('./_lib/rate-limit');
const { validateContact } = require('./_lib/validate');

const SITE_URL = process.env.SITE_URL || 'https://eonriskservices.com';
const FROM_EMAIL = 'Rory Roberts <rory@eonriskservices.com>';

module.exports = async function handler(req, res) {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Rate limit
  const { allowed, ip } = rateLimit(req);
  if (!allowed) {
    return res.status(429).json({ error: 'Too many requests. Please try again in a minute.' });
  }

  // Validate
  const { valid, errors, data } = validateContact(req.body);
  if (!valid) {
    return res.status(400).json({ error: errors.join(', ') });
  }

  try {
    // 1. Store in Supabase
    const { error: dbError } = await supabase
      .from('contact_submissions')
      .insert({
        name: data.name,
        email: data.email,
        organisation: data.organisation,
        subject_category: data.subject_category,
        message: data.message,
        ip_address: ip
      });

    if (dbError) {
      console.error('Supabase insert error:', dbError);
    }

    // 2. Forward message to Rory
    await resend.emails.send({
      from: FROM_EMAIL,
      to: 'rory@eonriskservices.com',
      replyTo: data.email,
      subject: `Contact: ${data.subject_category || 'General'} — ${data.name}`,
      html: forwardEmailHtml(data, ip)
    });

    // 3. Send auto-reply to sender
    await resend.emails.send({
      from: FROM_EMAIL,
      to: data.email,
      subject: 'Thanks for getting in touch — EON Risk Services',
      html: autoReplyHtml(data.name)
    });

    return res.status(200).json({ ok: true });

  } catch (err) {
    console.error('Contact API error:', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
};

// --- Email Templates ---

function forwardEmailHtml(data, ip) {
  const subjectLabels = {
    general: 'General enquiry',
    consulting: 'Consulting engagement',
    toolkit: 'Toolkit or methodology question',
    speaking: 'Speaking or training request',
    other: 'Other'
  };
  const subjectLabel = subjectLabels[data.subject_category] || data.subject_category || 'General';

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0; padding:20px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif; background:#F8F7F4;">
  <h2 style="color:#1B2A4A; margin:0 0 16px;">New Contact Form Submission</h2>
  <table style="border-collapse:collapse; background:#FFFFFF; border-radius:8px; overflow:hidden; width:100%; max-width:500px;">
    <tr>
      <td style="padding:12px 16px; border-bottom:1px solid #EEEDEA; font-weight:600; color:#1B2A4A; width:120px;">Name</td>
      <td style="padding:12px 16px; border-bottom:1px solid #EEEDEA; color:#2C2C2C;">${data.name}</td>
    </tr>
    <tr>
      <td style="padding:12px 16px; border-bottom:1px solid #EEEDEA; font-weight:600; color:#1B2A4A;">Email</td>
      <td style="padding:12px 16px; border-bottom:1px solid #EEEDEA; color:#2C2C2C;"><a href="mailto:${data.email}" style="color:#2A7F7F;">${data.email}</a></td>
    </tr>
    <tr>
      <td style="padding:12px 16px; border-bottom:1px solid #EEEDEA; font-weight:600; color:#1B2A4A;">Organisation</td>
      <td style="padding:12px 16px; border-bottom:1px solid #EEEDEA; color:#2C2C2C;">${data.organisation || '—'}</td>
    </tr>
    <tr>
      <td style="padding:12px 16px; border-bottom:1px solid #EEEDEA; font-weight:600; color:#1B2A4A;">Subject</td>
      <td style="padding:12px 16px; border-bottom:1px solid #EEEDEA; color:#2C2C2C;">${subjectLabel}</td>
    </tr>
    <tr>
      <td style="padding:12px 16px; border-bottom:1px solid #EEEDEA; font-weight:600; color:#1B2A4A; vertical-align:top;">Message</td>
      <td style="padding:12px 16px; border-bottom:1px solid #EEEDEA; color:#2C2C2C; white-space:pre-wrap;">${data.message}</td>
    </tr>
    <tr>
      <td style="padding:12px 16px; font-weight:600; color:#1B2A4A;">IP</td>
      <td style="padding:12px 16px; color:#8A8A8A; font-size:13px;">${ip}</td>
    </tr>
  </table>
  <p style="margin:16px 0 0; color:#8A8A8A; font-size:12px;">Reply directly to this email to respond to ${data.name}.</p>
</body>
</html>`;
}

function autoReplyHtml(name) {
  const firstName = name.split(' ')[0];
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0; padding:0; background:#F8F7F4; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8F7F4; padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#FFFFFF; border-radius:12px; overflow:hidden;">

        <!-- Header -->
        <tr>
          <td style="background:#1B2A4A; padding:32px 40px; text-align:center;">
            <h1 style="margin:0; color:#FFFFFF; font-size:22px; font-weight:600;">EON Risk Services</h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:40px;">
            <p style="margin:0 0 16px; color:#2C2C2C; font-size:16px; line-height:1.6;">Hi ${firstName},</p>
            <p style="margin:0 0 16px; color:#5A5A5A; font-size:15px; line-height:1.7;">Thank you for getting in touch. I've received your message and will respond within 24 hours on business days.</p>

            <p style="margin:0 0 24px; color:#5A5A5A; font-size:15px; line-height:1.7;">In the meantime, you might find these useful:</p>

            <!-- Links -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
              <tr><td style="padding:8px 0;">
                <a href="${SITE_URL}/toolkit.html" style="display:block; padding:14px 24px; background:#F8F7F4; color:#1B2A4A; text-decoration:none; border-radius:6px; font-size:14px; font-weight:600; border:1px solid #EEEDEA;">
                  Risk Identification Toolkit — free book, templates, and AI tools
                </a>
              </td></tr>
              <tr><td style="padding:8px 0;">
                <a href="${SITE_URL}/assessment.html" style="display:block; padding:14px 24px; background:#F8F7F4; color:#1B2A4A; text-decoration:none; border-radius:6px; font-size:14px; font-weight:600; border:1px solid #EEEDEA;">
                  Score Your Process — 5-minute risk identification self-assessment
                </a>
              </td></tr>
              <tr><td style="padding:8px 0;">
                <a href="${SITE_URL}/insights.html" style="display:block; padding:14px 24px; background:#F8F7F4; color:#1B2A4A; text-decoration:none; border-radius:6px; font-size:14px; font-weight:600; border:1px solid #EEEDEA;">
                  Insights — articles on risk identification practice
                </a>
              </td></tr>
            </table>

            <p style="margin:0; color:#2C2C2C; font-size:15px; line-height:1.6;">Best,<br><strong>Rory Roberts, FRM</strong><br><span style="color:#8A8A8A; font-size:13px;">CEO, EON Risk Services</span></p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:24px 40px; border-top:1px solid #EEEDEA; text-align:center;">
            <p style="margin:0; color:#8A8A8A; font-size:12px; line-height:1.6;">
              EON Risk Services Ltd &middot; Dublin, Ireland<br>
              <a href="${SITE_URL}" style="color:#2A7F7F; text-decoration:none;">eonriskservices.com</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
