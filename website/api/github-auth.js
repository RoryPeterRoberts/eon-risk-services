// GitHub Device Flow — Combined handler for device code + polling
// POST { action: "device-code" } → request device code
// POST { action: "poll", device_code: "..." } → poll for access token

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

  const clientId = process.env.GITHUB_CLIENT_ID;
  if (!clientId) return res.status(500).json({ error: 'GITHUB_CLIENT_ID not configured' });

  const { action, device_code } = req.body || {};

  try {
    if (action === 'device-code') {
      const r = await fetch('https://github.com/login/device/code', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ client_id: clientId, scope: 'repo' }),
      });
      const data = await r.json();
      if (!r.ok) throw new Error(data.error_description || data.error || 'GitHub error');
      return res.status(200).json(data);

    } else if (action === 'poll') {
      if (!device_code) return res.status(400).json({ error: 'device_code required' });
      const r = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client_id: clientId,
          device_code,
          grant_type: 'urn:ietf:params:oauth:grant-type:device_code',
        }),
      });
      const data = await r.json();
      return res.status(200).json(data);

    } else {
      return res.status(400).json({ error: 'action must be "device-code" or "poll"' });
    }
  } catch (err) {
    console.error('GitHub auth error:', err);
    return res.status(500).json({ error: err.message });
  }
};
