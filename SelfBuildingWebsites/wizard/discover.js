// ============================================================
// BUILDMYSITE — Business Discovery Engine
// Uses the user's AI API key to search for and extract
// structured business information from a business name.
// Runs client-side in the wizard.
// ============================================================

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

export async function discoverBusiness(businessName, location, apiKey, model) {
  const query = location ? `${businessName} in ${location}` : businessName;
  const userMessage = `Find information about this business: ${query}`;

  let response;

  if (model.startsWith('claude')) {
    response = await callAnthropic(userMessage, apiKey, model);
  } else if (model.startsWith('gpt')) {
    response = await callOpenAI(userMessage, apiKey, model);
  } else if (model.startsWith('gemini')) {
    response = await callGemini(userMessage, apiKey, model);
  } else {
    throw new Error(`Unsupported model: ${model}`);
  }

  // Parse the JSON response
  try {
    // Strip markdown code fences if the model wraps the response
    let cleaned = response.trim();
    if (cleaned.startsWith('```')) {
      cleaned = cleaned.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '');
    }
    return JSON.parse(cleaned);
  } catch (e) {
    // If parsing fails, return the raw text so the wizard can show it
    return {
      found: false,
      raw: response,
      suggestion: 'Could not parse business information. Please enter details manually.'
    };
  }
}

// ---- Provider-specific calls --------------------------------

async function callAnthropic(userMessage, apiKey, model) {
  const r = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      model,
      max_tokens: 1024,
      system: DISCOVERY_PROMPT,
      messages: [{ role: 'user', content: userMessage }]
    })
  });
  if (!r.ok) throw new Error(`Anthropic ${r.status}`);
  const data = await r.json();
  return data.content.filter(b => b.type === 'text').map(b => b.text).join('');
}

async function callOpenAI(userMessage, apiKey, model) {
  const r = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model,
      max_tokens: 1024,
      messages: [
        { role: 'system', content: DISCOVERY_PROMPT },
        { role: 'user', content: userMessage }
      ]
    })
  });
  if (!r.ok) throw new Error(`OpenAI ${r.status}`);
  const data = await r.json();
  return data.choices[0].message.content || '';
}

async function callGemini(userMessage, apiKey, model) {
  const r = await fetch('https://generativelanguage.googleapis.com/v1beta/openai/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model,
      max_tokens: 1024,
      messages: [
        { role: 'system', content: DISCOVERY_PROMPT },
        { role: 'user', content: userMessage }
      ]
    })
  });
  if (!r.ok) throw new Error(`Gemini ${r.status}`);
  const data = await r.json();
  return data.choices[0].message.content || '';
}
