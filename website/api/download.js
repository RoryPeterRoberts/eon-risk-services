const { createReadStream, statSync } = require('fs');
const { join } = require('path');
const crypto = require('crypto');

const SECRET = process.env.DOWNLOAD_SECRET || process.env.RESEND_API_KEY;

// Token is valid for 7 days
const TOKEN_TTL_MS = 7 * 24 * 60 * 60 * 1000;

const GATED_FILES = {
  'book': {
    path: 'Bank_Risk_Identification.pdf',
    contentType: 'application/pdf',
    filename: 'Bank_Risk_Identification.pdf'
  },
  'templates': {
    path: 'Risk_Identification_Template_Pack.xlsx',
    contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    filename: 'Risk_Identification_Template_Pack.xlsx'
  },
  'cro-overview': {
    path: 'CRO_Executive_Overview.pdf',
    contentType: 'application/pdf',
    filename: 'CRO_Executive_Overview.pdf'
  }
};

function generateToken(email, file) {
  const expires = Date.now() + TOKEN_TTL_MS;
  const payload = `${email}:${file}:${expires}`;
  const sig = crypto.createHmac('sha256', SECRET).update(payload).digest('hex').slice(0, 16);
  // Base64 encode for URL safety
  return Buffer.from(`${payload}:${sig}`).toString('base64url');
}

function verifyToken(token) {
  try {
    const decoded = Buffer.from(token, 'base64url').toString();
    const parts = decoded.split(':');
    const sig = parts.pop();
    const expires = parseInt(parts.pop());
    const file = parts.pop();
    const email = parts.join(':'); // email might contain colons

    if (Date.now() > expires) return null;

    const payload = `${email}:${file}:${expires}`;
    const expected = crypto.createHmac('sha256', SECRET).update(payload).digest('hex').slice(0, 16);

    if (sig !== expected) return null;

    return { email, file };
  } catch {
    return null;
  }
}

module.exports = async function handler(req, res) {
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const { token } = req.query;

  if (!token) {
    return res.status(401).json({ error: 'Download link required. Get one at /toolkit' });
  }

  const verified = verifyToken(token);
  if (!verified) {
    return res.status(403).json({ error: 'Link expired or invalid. Request a new one at /toolkit' });
  }

  const fileInfo = GATED_FILES[verified.file];
  if (!fileInfo) {
    return res.status(404).json({ error: 'File not found' });
  }

  const filePath = join(__dirname, '..', '_gated', fileInfo.path);

  try {
    const stat = statSync(filePath);
    res.setHeader('Content-Type', fileInfo.contentType);
    res.setHeader('Content-Disposition', `attachment; filename="${fileInfo.filename}"`);
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Cache-Control', 'private, no-cache');
    createReadStream(filePath).pipe(res);
  } catch {
    return res.status(404).json({ error: 'File not found' });
  }
};

// Export for use in toolkit.js email template
module.exports.generateToken = generateToken;
