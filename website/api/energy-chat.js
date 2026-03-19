// EON Energy Advisor — Streaming Chat API
// Vercel serverless function: POST { messages, household }
// Returns: SSE stream of Gemini responses
//
// Uses Gemini OpenAI-compatible endpoint with streaming

const fs = require('fs');
const path = require('path');

// Load knowledge base at cold start (cached across invocations)
let KNOWLEDGE_BASE = '';
try {
  KNOWLEDGE_BASE = fs.readFileSync(
    path.join(__dirname, 'energy-knowledge-base.txt'), 'utf8'
  );
} catch (e) {
  console.error('Failed to load knowledge base:', e.message);
}

const SYSTEM_PROMPT = `You are the EON Energy Advisor — a friendly, knowledgeable AI energy consultant for Irish households. You were built by EON Risk Services (eonriskservices.com) to help Irish people reduce their energy costs during the 2026 energy crisis.

PERSONALITY:
- Warm, reassuring, practical. Like a knowledgeable neighbour who happens to be an energy expert.
- Use plain English. No jargon without explanation.
- Be specific with numbers — euro amounts, percentages, payback periods.
- Prioritise quick wins before expensive upgrades.
- Always acknowledge the stress of rising costs before diving into solutions.

RULES:
- Only reference data from the knowledge base below. Never invent figures.
- Say "the data shows" or "based on current figures" — never "I recommend" or "you should".
- If asked something outside your knowledge, say so honestly. Don't guess.
- Never provide specific financial advice — you provide energy guidance.
- Always mention that SEAI grants must be approved BEFORE work begins.
- When discussing grants, mention the specific euro amounts.
- When discussing heat pumps, always mention insulation as a prerequisite.
- Banned words: guaranteed, definitely, should (use "could" or "might"), advise (use "consider"), profit, bargain, no-brainer.

HOUSEHOLD CONTEXT:
When the user provides household details via the intake form, use them to personalise advice:
- House type and age determine insulation options and likely BER
- Current heating type determines which upgrades are most impactful
- Monthly spend helps calculate payback periods
- County helps with local supplier availability

KNOWLEDGE BASE (as of March 2026):
${KNOWLEDGE_BASE}

DISCLAIMER (include in your FIRST response only):
"This is AI-generated energy guidance, not professional advice. Grant amounts and energy prices are as of March 2026. Always check seai.ie for the latest figures and consult a qualified installer before making major changes."`;

module.exports = async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'AI not configured' });

  const { messages, household } = req.body || {};
  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'messages array required' });
  }

  // Build household context string from intake form
  let householdContext = '';
  if (household) {
    const parts = [];
    if (household.houseType) parts.push(`House type: ${household.houseType}`);
    if (household.houseAge) parts.push(`Age: ${household.houseAge}`);
    if (household.heatingType) parts.push(`Heating: ${household.heatingType}`);
    if (household.monthlySpend) parts.push(`Monthly energy spend: €${household.monthlySpend}`);
    if (household.county) parts.push(`Location: ${household.county}`);
    if (household.concern) parts.push(`Main concern: ${household.concern}`);
    if (parts.length > 0) {
      householdContext = `\n\nUSER'S HOUSEHOLD:\n${parts.join('\n')}`;
    }
  }

  // Build messages array for Gemini
  const apiMessages = [
    { role: 'system', content: SYSTEM_PROMPT + householdContext },
    ...messages.map(m => ({
      role: m.role === 'assistant' ? 'assistant' : 'user',
      content: m.content
    }))
  ];

  // SSE headers
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no');

  try {
    const r = await fetch('https://generativelanguage.googleapis.com/v1beta/openai/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gemini-2.5-flash-lite',
        max_tokens: 2048,
        stream: true,
        messages: apiMessages
      })
    });

    if (!r.ok) {
      const text = await r.text();
      res.write(`data: ${JSON.stringify({ error: `API error: ${r.status}` })}\n\n`);
      res.write('data: [DONE]\n\n');
      return res.end();
    }

    // Stream the response
    const reader = r.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });

      // Process complete SSE lines
      const lines = buffer.split('\n');
      buffer = lines.pop(); // Keep incomplete line in buffer

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || !trimmed.startsWith('data: ')) continue;

        const data = trimmed.slice(6);
        if (data === '[DONE]') {
          res.write('data: [DONE]\n\n');
          continue;
        }

        try {
          const parsed = JSON.parse(data);
          const content = parsed.choices?.[0]?.delta?.content;
          if (content) {
            res.write(`data: ${JSON.stringify({ text: content })}\n\n`);
          }
        } catch (e) {
          // Skip malformed chunks
        }
      }
    }

    // Ensure we send DONE
    res.write('data: [DONE]\n\n');
    res.end();

  } catch (err) {
    console.error('Energy chat error:', err);
    res.write(`data: ${JSON.stringify({ error: err.message })}\n\n`);
    res.write('data: [DONE]\n\n');
    res.end();
  }
};
