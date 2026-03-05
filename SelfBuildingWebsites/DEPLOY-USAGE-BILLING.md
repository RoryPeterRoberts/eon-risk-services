# Deploy Usage Metering & Billing — Step-by-Step

## Phase 1: Supabase (5 min)

### Step 1.1: Run the migration SQL
- Open Supabase dashboard → SQL Editor
- Paste contents of `migrations/001_usage_billing.sql`
- Click Run
- Verify: 3 tables created (sites, usage, billing_events) + 1 function (increment_usage)

## Phase 2: Deploy to EON's Vercel (5 min)

### Step 2.1: Install Stripe dependency
```bash
cd ~/EONRiskServices/website && npm install
```

### Step 2.2: Push to EON website repo
```bash
cd ~/EONRiskServices && git add website/api/usage-gate.js website/api/create-checkout.js website/api/stripe-webhook.js website/package.json website/package-lock.json
git commit -m "Add usage gate, Stripe checkout, and webhook endpoints"
git push
```

### Step 2.3: Verify usage-gate is live
```bash
curl -X POST https://www.eonriskservices.com/api/usage-gate \
  -H 'Content-Type: application/json' \
  -d '{"githubRepo":"test/test-repo","action":"check"}'
```
Expected: `{"allowed":true,"tier":"free","used":0,"limit":5,"remaining":5,...}`

## Phase 3: Push updated site-kit to Copper Kettle (5 min)

### Step 3.1: Rebuild the bundle (already done, but just in case)
```bash
cd ~/EONRiskServices && node SelfBuildingWebsites/scripts/bundle.js
```

### Step 3.2: Push updated files to Copper Kettle test repo
Files to push: `site-kit/api/agent.js`, `site-kit/api/site-info.js`, `site-kit/admin.html`

```bash
cd ~/EONRiskServices/SelfBuildingWebsites
# Clone Copper Kettle if not already local
git clone git@github.com:RoryPeterRoberts/the-copper-kettle-a-cafe-bistro-in-wexford-town.git /tmp/copper-kettle
# Copy updated files
cp site-kit/api/agent.js /tmp/copper-kettle/api/agent.js
cp site-kit/api/site-info.js /tmp/copper-kettle/api/site-info.js
cp site-kit/admin.html /tmp/copper-kettle/admin.html
# Push
cd /tmp/copper-kettle
git add -A && git commit -m "Add usage metering, own-key support, and upgrade UI" && git push
```

## Phase 4: Test usage gate (5 min)

### Step 4.1: Open Copper Kettle admin
- Go to https://the-copper-kettle-a-cafe-bistro-in.vercel.app/admin.html
- Sign in with admin token
- Verify: usage bar appears showing "0/5 edits used this month"
- Verify: settings gear icon visible in usage bar

### Step 4.2: Test 5 edits
- Make 5 small edits (e.g. "Change the hero heading to Welcome")
- Watch counter increment each time
- On the 6th attempt, verify the upgrade modal appears

### Step 4.3: Test own-key bypass
- Click Settings gear → paste a Gemini API key
- Verify: usage bar shows "Using your own API key"
- Make an edit — should work without hitting the gate

## Phase 5: Stripe setup (10 min) — DO THIS AFTER Phase 4 PASSES

### Step 5.1: Create Stripe products
In Stripe Dashboard (test mode):
1. Products → Add Product: "BuildMySite Pro Monthly" → EUR 7.00/month recurring
2. Products → Add Product: "BuildMySite Pro Yearly" → EUR 49.00/year recurring
3. Products → Add Product: "BuildMySite Lifetime" → EUR 29.00 one-time

Copy the 3 Price IDs (start with `price_`)

### Step 5.2: Set env vars on EON's Vercel
In Vercel Dashboard → EON project → Settings → Environment Variables:
- `STRIPE_SECRET_KEY` = your Stripe secret key (sk_test_...)
- `STRIPE_WEBHOOK_SECRET` = (set in step 5.3)
- `STRIPE_PRICE_MONTHLY` = price_xxxxx
- `STRIPE_PRICE_YEARLY` = price_xxxxx
- `STRIPE_PRICE_LIFETIME` = price_xxxxx

### Step 5.3: Create Stripe webhook
In Stripe Dashboard → Developers → Webhooks → Add endpoint:
- URL: `https://www.eonriskservices.com/api/stripe-webhook`
- Events: `checkout.session.completed`, `customer.subscription.deleted`, `invoice.payment_failed`
- Copy the webhook signing secret → set as `STRIPE_WEBHOOK_SECRET` in Vercel

### Step 5.4: Redeploy EON website
Vercel needs a redeploy to pick up new env vars:
```bash
cd ~/EONRiskServices && git commit --allow-empty -m "Redeploy with Stripe env vars" && git push
```

### Step 5.5: Test Stripe checkout
```
https://www.eonriskservices.com/api/create-checkout?repo=RoryPeterRoberts/the-copper-kettle-a-cafe-bistro-in-wexford-town&plan=monthly
```
Should redirect to Stripe Checkout. Use test card `4242 4242 4242 4242`.
After payment, check Supabase → sites table → tier should be 'pro'.

### Step 5.6: Test downgrade
In Stripe Dashboard, cancel the test subscription.
Check Supabase → sites table → tier should be back to 'free'.

## Phase 6: Rebuild wizard zip (2 min)

### Step 6.1: Rebuild dist + zip
```bash
cd ~/EONRiskServices
node SelfBuildingWebsites/scripts/bundle.js
node SelfBuildingWebsites/scripts/build.js
zip -j website/downloads/buildmysite.zip SelfBuildingWebsites/dist/setup.html
```

### Step 6.2: Push everything
```bash
cd ~/EONRiskServices
git add -A && git commit -m "Usage metering, Stripe billing, and own-key support" && git push
```
