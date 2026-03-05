// AI Environment Setup — sets AI_API_KEY on user's Vercel project
// Uses EON's Gemini key (never exposed to client)
// Client sends: POST { vercelToken, projectId }
// Returns: { set: 2 }

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

  const geminiKey = process.env.GEMINI_API_KEY;
  if (!geminiKey) return res.status(500).json({ error: 'AI not configured' });

  const { vercelToken, projectId } = req.body || {};
  if (!vercelToken || !projectId) {
    return res.status(400).json({ error: 'vercelToken and projectId required' });
  }

  const envVars = [
    { key: 'AI_API_KEY', value: geminiKey },
    { key: 'AI_MODEL',   value: 'gemini-2.5-flash' },
  ];

  try {
    for (const env of envVars) {
      const r = await fetch(`https://api.vercel.com/v10/projects/${projectId}/env`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${vercelToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          key: env.key,
          value: env.value,
          type: 'encrypted',
          target: ['production', 'preview']
        })
      });
      if (!r.ok) {
        const text = await r.text();
        throw new Error(`Vercel API ${r.status}: ${text}`);
      }
    }
    return res.status(200).json({ set: envVars.length });
  } catch (err) {
    console.error('AI env setup error:', err);
    return res.status(500).json({ error: err.message });
  }
};
