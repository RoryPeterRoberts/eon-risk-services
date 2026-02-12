const { supabase } = require('./_lib/supabase');
const { resend } = require('./_lib/resend');
const { rateLimit } = require('./_lib/rate-limit');
const { validateToolkit } = require('./_lib/validate');

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
  const { valid, errors, data } = validateToolkit(req.body);
  if (!valid) {
    return res.status(400).json({ error: errors.join(', ') });
  }

  try {
    // 1. Store lead in Supabase
    const { error: dbError } = await supabase
      .from('toolkit_leads')
      .insert({
        name: data.name,
        email: data.email,
        organisation: data.organisation,
        role: data.role,
        source: 'toolkit-form',
        ip_address: ip
      });

    if (dbError) {
      console.error('Supabase insert error:', dbError);
      // Continue anyway — email delivery is more important than logging
    }

    // 2. Send toolkit download email to user
    await resend.emails.send({
      from: FROM_EMAIL,
      to: data.email,
      subject: 'Your Risk Identification Toolkit',
      html: toolkitEmailHtml(data.name)
    });

    // 3. Send notification to Rory
    await resend.emails.send({
      from: FROM_EMAIL,
      to: 'rory@eonriskservices.com',
      replyTo: data.email,
      subject: `Toolkit Download: ${data.name}${data.organisation ? ` (${data.organisation})` : ''}`,
      html: notificationEmailHtml(data, ip)
    });

    return res.status(200).json({ ok: true });

  } catch (err) {
    console.error('Toolkit API error:', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
};

// --- Email Templates ---

function toolkitEmailHtml(name) {
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
            <p style="margin:8px 0 0; color:#C5A55A; font-size:13px; letter-spacing:1px; text-transform:uppercase;">Risk Identification Toolkit</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:40px;">
            <p style="margin:0 0 16px; color:#2C2C2C; font-size:16px; line-height:1.6;">Hi ${firstName},</p>
            <p style="margin:0 0 24px; color:#5A5A5A; font-size:15px; line-height:1.7;">Thank you for downloading the Risk Identification Toolkit. Here are your four resources, built from 20 years of practice and 179 documented bank failures.</p>

            <!-- Download Buttons -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
              <tr><td style="padding:8px 0;">
                <a href="${SITE_URL}/downloads/Bank_Risk_Identification.pdf" style="display:block; padding:16px 24px; background:#2A7F7F; color:#FFFFFF; text-decoration:none; border-radius:6px; font-size:15px; font-weight:600; text-align:center;">
                  Download the Book (PDF)
                </a>
              </td></tr>
              <tr><td style="padding:8px 0;">
                <a href="${SITE_URL}/downloads/Risk_Identification_Template_Pack.xlsx" style="display:block; padding:16px 24px; background:#2A7F7F; color:#FFFFFF; text-decoration:none; border-radius:6px; font-size:15px; font-weight:600; text-align:center;">
                  Download the Template Pack (Excel)
                </a>
              </td></tr>
              <tr><td style="padding:8px 0;">
                <a href="${SITE_URL}/downloads/Copilot_Prompt_Library.md" style="display:block; padding:16px 24px; background:#2A7F7F; color:#FFFFFF; text-decoration:none; border-radius:6px; font-size:15px; font-weight:600; text-align:center;">
                  Download the AI Prompt Library (Markdown)
                </a>
              </td></tr>
              <tr><td style="padding:8px 0;">
                <a href="${SITE_URL}/downloads/copilot-agent/deployment_guide.md" style="display:block; padding:16px 24px; background:#2A7F7F; color:#FFFFFF; text-decoration:none; border-radius:6px; font-size:15px; font-weight:600; text-align:center;">
                  Get the Copilot Agent Definition (4 files)
                </a>
              </td></tr>
            </table>

            <!-- What to Do Next -->
            <div style="background:#F8F7F4; border-radius:8px; padding:24px; margin-bottom:24px;">
              <h3 style="margin:0 0 12px; color:#1B2A4A; font-size:16px; font-weight:600;">What to do next</h3>
              <ol style="margin:0; padding-left:20px; color:#5A5A5A; font-size:14px; line-height:1.8;">
                <li>Start with the book to understand the full methodology</li>
                <li>Use the template pack to build your artifacts</li>
                <li>Deploy the Copilot agent for AI-assisted implementation</li>
                <li><a href="${SITE_URL}/assessment.html" style="color:#2A7F7F; text-decoration:underline;">Score your current process</a> to identify gaps</li>
              </ol>
            </div>

            <p style="margin:0 0 24px; color:#5A5A5A; font-size:14px; line-height:1.7;">If you need help implementing the methodology in your bank, we offer gap assessments, full implementation support, and audit-readiness reviews. Just reply to this email.</p>

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

function notificationEmailHtml(data, ip) {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0; padding:20px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif; background:#F8F7F4;">
  <h2 style="color:#1B2A4A; margin:0 0 16px;">New Toolkit Download</h2>
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
      <td style="padding:12px 16px; border-bottom:1px solid #EEEDEA; font-weight:600; color:#1B2A4A;">Role</td>
      <td style="padding:12px 16px; border-bottom:1px solid #EEEDEA; color:#2C2C2C;">${data.role || '—'}</td>
    </tr>
    <tr>
      <td style="padding:12px 16px; font-weight:600; color:#1B2A4A;">IP</td>
      <td style="padding:12px 16px; color:#8A8A8A; font-size:13px;">${ip}</td>
    </tr>
  </table>
  <p style="margin:16px 0 0; color:#8A8A8A; font-size:12px;">Submitted at ${new Date().toISOString()}</p>
</body>
</html>`;
}
