// GitHub Device Flow — Step 1: Request device code
// Proxy to avoid CORS restrictions on github.com

module.exports = async function handler(req, res) {
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

  const clientId = process.env.GITHUB_CLIENT_ID;
  if (!clientId) {
    return res.status(500).json({ error: 'GITHUB_CLIENT_ID not configured' });
  }

  try {
    const r = await fetch('https://github.com/login/device/code', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        scope: 'repo',
      }),
    });

    const data = await r.json();
    if (!r.ok) throw new Error(data.error_description || data.error || 'GitHub error');

    return res.status(200).json(data);
  } catch (err) {
    console.error('Device code error:', err);
    return res.status(500).json({ error: err.message });
  }
};
