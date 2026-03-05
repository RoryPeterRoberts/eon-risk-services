-- BuildMySite Usage Metering & Billing
-- Run this in your Supabase SQL Editor

-- 1. Sites — one row per deployed BuildMySite site
CREATE TABLE IF NOT EXISTS sites (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  github_repo TEXT UNIQUE NOT NULL,        -- e.g. 'owner/repo-name'
  tier TEXT NOT NULL DEFAULT 'free',        -- 'free', 'pro', 'lifetime'
  email TEXT,
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. Usage — monthly edit counters
CREATE TABLE IF NOT EXISTS usage (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  site_id UUID NOT NULL REFERENCES sites(id) ON DELETE CASCADE,
  month TEXT NOT NULL,                      -- e.g. '2026-03'
  edit_count INT NOT NULL DEFAULT 0,
  UNIQUE(site_id, month)
);

-- 3. Billing events — Stripe webhook audit log
CREATE TABLE IF NOT EXISTS billing_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stripe_event_id TEXT UNIQUE NOT NULL,     -- idempotency key
  event_type TEXT NOT NULL,
  payload JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Auto-update updated_at on sites
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER sites_updated_at
  BEFORE UPDATE ON sites
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Atomic increment function (avoids race conditions)
CREATE OR REPLACE FUNCTION increment_usage(p_site_id UUID, p_month TEXT)
RETURNS INT AS $$
DECLARE
  result INT;
BEGIN
  INSERT INTO usage (site_id, month, edit_count)
  VALUES (p_site_id, p_month, 1)
  ON CONFLICT (site_id, month)
  DO UPDATE SET edit_count = usage.edit_count + 1
  RETURNING edit_count INTO result;
  RETURN result;
END;
$$ LANGUAGE plpgsql;

-- Indexes for common queries
CREATE INDEX IF NOT EXISTS idx_usage_site_month ON usage(site_id, month);
CREATE INDEX IF NOT EXISTS idx_sites_stripe_customer ON sites(stripe_customer_id) WHERE stripe_customer_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_billing_events_type ON billing_events(event_type);
