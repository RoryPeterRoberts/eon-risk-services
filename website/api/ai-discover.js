// AI Discovery Proxy — calls Gemini with EON's key
// Client sends: POST { businessName, location }
// Returns: structured business info JSON

const DISCOVERY_PROMPT = `You are a business information assistant. Given a business name (and optionally a location), search your knowledge for information about this business and return a JSON object with the following fields. Only include fields you are confident about. Do not invent information.

Return ONLY a JSON object (no markdown, no explanation):
{
  "name": "Full business name",
  "description": "1-2 sentence description of what the business does",
  "type": "Business category (e.g. restaurant, plumber, salon, accountant)",
  "email": "Contact email if known",
  "phone": "Phone number if known",
  "address": "Full address if known",
  "hours": "Opening hours if known",
  "services": ["List of services or products offered"],
  "tagline": "A suggested tagline for their website",
  "tone": "Suggested tone for website copy (e.g. warm and welcoming, professional and trustworthy, modern and energetic)"
}

If you cannot find the business, return:
{ "found": false, "suggestion": "A helpful message about what info the user should provide manually" }`;

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'AI not configured' });

  const { businessName, location } = req.body || {};
  if (!businessName) return res.status(400).json({ error: 'businessName required' });

  const query = location ? `${businessName} in ${location}` : businessName;
  const userMessage = `Find information about this business: ${query}`;

  try {
    const r = await fetch('https://generativelanguage.googleapis.com/v1beta/openai/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gemini-2.5-flash-lite',
        max_tokens: 1024,
        messages: [
          { role: 'system', content: DISCOVERY_PROMPT },
          { role: 'user', content: userMessage }
        ]
      })
    });

    if (!r.ok) {
      const text = await r.text();
      throw new Error(`Gemini ${r.status}: ${text}`);
    }

    const data = await r.json();
    const content = data.choices[0].message.content || '';

    // Parse JSON from response (strip markdown fences if present)
    let cleaned = content.trim();
    if (cleaned.startsWith('```')) {
      cleaned = cleaned.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '');
    }

    const parsed = JSON.parse(cleaned);
    return res.status(200).json(parsed);
  } catch (err) {
    console.error('AI discover error:', err);
    return res.status(500).json({ error: err.message });
  }
};
