# Setup Vercel OAuth Integration

## Step 1: Register the Integration

1. Go to https://vercel.com/dashboard/integrations/console
2. Click **Create**
3. Fill in:
   - **Name:** BuildMySite
   - **URL Slug:** `buildmysite`
   - **Developer:** EON Risk Services Ltd
   - **Contact Email:** roberts.rory@gmail.com
   - **Support Email:** roberts.rory@gmail.com
   - **Short Description:** AI website builder
   - **Logo:** Upload the BuildMySite logo
   - **Category:** Dev Tools
   - **Website:** https://www.eonriskservices.com/buildmysite
   - **Redirect URL:** `https://www.eonriskservices.com/api/oauth/vercel-callback`

4. **API Scopes** (set these to Read/Write):
   - `user` — Read
   - `project` — Read/Write
   - `project-env-vars` — Read/Write
   - `deployment` — Read/Write
   - `domain` — Read/Write

5. Accept the terms and create

## Step 2: Get Credentials

After creating, go to the integration settings and find:
- **Client ID** (starts with `oac_`)
- **Client Secret**

## Step 3: Set Env Vars on Vercel

Add these to the EON website project on Vercel:
- `VERCEL_INTEGRATION_CLIENT_ID` = your Client ID
- `VERCEL_INTEGRATION_CLIENT_SECRET` = your Client Secret

## Step 4: Redeploy

Push or trigger a redeploy so the new env vars take effect.

## Step 5: Test

1. Open the BuildMySite wizard
2. Get to the Vercel step
3. Click "Connect Vercel"
4. Popup should open to `vercel.com/integrations/buildmysite/new`
5. Approve the connection
6. Popup should redirect to the callback, show "Connected!", and close
7. Wizard should proceed with the token
