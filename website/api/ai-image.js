// AI Image Generation Proxy — calls Gemini Image API with EON's key
// Client sends: POST { prompt }
// Returns: { data: "<base64 PNG>" }

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'AI not configured' });

  const { prompt, aspectRatio } = req.body || {};
  if (!prompt) return res.status(400).json({ error: 'prompt required' });

  try {
    const genConfig = { responseModalities: ['TEXT', 'IMAGE'] };
    if (aspectRatio) {
      genConfig.imageConfig = { aspectRatio }; // e.g. "16:9", "1:1"
    }

    const r = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent', {
      method: 'POST',
      headers: {
        'x-goog-api-key': apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: genConfig
      })
    });

    if (!r.ok) {
      const text = await r.text();
      throw new Error(`Image generation failed: ${r.status} ${text}`);
    }

    const data = await r.json();
    const parts = data.candidates?.[0]?.content?.parts || [];
    const imagePart = parts.find(p => p.inlineData?.data);
    if (!imagePart) throw new Error('No image returned from Gemini');

    return res.status(200).json({ data: imagePart.inlineData.data });
  } catch (err) {
    console.error('AI image error:', err);
    return res.status(500).json({ error: err.message });
  }
};
