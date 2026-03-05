// Vercel OAuth Callback — exchanges code for access token, sends to wizard via postMessage
// Redirect URL for the BuildMySite Vercel Integration
// GET ?code=xxx&configurationId=xxx&next=xxx&state=xxx

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const { code, next, state } = req.query || {};

  if (!code) {
    return res.status(400).send(errorPage('Missing authorization code. Please try again.'));
  }

  const clientId = process.env.VERCEL_INTEGRATION_CLIENT_ID;
  const clientSecret = process.env.VERCEL_INTEGRATION_CLIENT_SECRET;
  const redirectUri = 'https://www.eonriskservices.com/api/oauth/vercel-callback';

  if (!clientId || !clientSecret) {
    return res.status(500).send(errorPage('Vercel OAuth not configured.'));
  }

  try {
    // Exchange code for access token
    const tokenRes = await fetch('https://api.vercel.com/v2/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        code,
        redirect_uri: redirectUri,
      }).toString(),
    });

    if (!tokenRes.ok) {
      const text = await tokenRes.text();
      console.error('Vercel token exchange failed:', tokenRes.status, text);
      return res.status(400).send(errorPage('Token exchange failed. The code may have expired — try again.'));
    }

    const data = await tokenRes.json();
    const accessToken = data.access_token;

    if (!accessToken) {
      return res.status(400).send(errorPage('No access token returned from Vercel.'));
    }

    // Send the token back to the wizard via postMessage, then close the popup
    res.setHeader('Content-Type', 'text/html');
    return res.status(200).send(`<!DOCTYPE html>
<html><head><title>Connected!</title></head>
<body style="font-family:system-ui;display:flex;align-items:center;justify-content:center;min-height:80vh;text-align:center">
<div>
  <div style="font-size:48px;margin-bottom:16px">&#10003;</div>
  <h2>Vercel connected!</h2>
  <p style="color:#666">Sending token back to BuildMySite...</p>
</div>
<script>
  if (window.opener) {
    window.opener.postMessage({
      type: 'vercel-oauth-token',
      token: ${JSON.stringify(accessToken)},
      state: ${JSON.stringify(state || '')},
      teamId: ${JSON.stringify(data.team_id || null)}
    }, '*');
    setTimeout(() => window.close(), 1500);
  } else {
    document.querySelector('p').textContent = 'Token received. You can close this window.';
  }
</script>
</body></html>`);
  } catch (err) {
    console.error('Vercel OAuth error:', err);
    return res.status(500).send(errorPage('Something went wrong. Please try again.'));
  }
};

function errorPage(message) {
  return `<!DOCTYPE html>
<html><head><title>Error</title></head>
<body style="font-family:system-ui;display:flex;align-items:center;justify-content:center;min-height:80vh;text-align:center">
<div>
  <div style="font-size:48px;margin-bottom:16px">&#10007;</div>
  <h2>Connection failed</h2>
  <p style="color:#666">${message}</p>
  <button onclick="window.close()" style="margin-top:16px;padding:8px 24px;cursor:pointer">Close</button>
</div>
</body></html>`;
}
