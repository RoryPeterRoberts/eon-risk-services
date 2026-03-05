// ============================================================
// BUILDMYSITE — Business Discovery Engine
// Calls the EON proxy endpoint (which holds the Gemini key).
// The prompt and AI model live server-side — this is just a thin client.
// ============================================================

export async function discoverBusiness(businessName, location) {
  const r = await fetch('https://www.eonriskservices.com/api/ai-discover', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ businessName, location })
  });

  if (!r.ok) {
    const data = await r.json().catch(() => ({}));
    throw new Error(data.error || `Discovery failed: ${r.status}`);
  }

  return r.json();
}
