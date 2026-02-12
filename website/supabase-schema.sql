-- Run this in the Supabase SQL Editor to create the tables

CREATE TABLE toolkit_leads (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  organisation TEXT,
  role TEXT,
  source TEXT DEFAULT 'toolkit-form',
  ip_address TEXT
);

CREATE TABLE contact_submissions (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  organisation TEXT,
  subject_category TEXT,
  message TEXT NOT NULL,
  ip_address TEXT,
  responded BOOLEAN DEFAULT false
);

-- Index for quick lookups
CREATE INDEX idx_toolkit_leads_email ON toolkit_leads (email);
CREATE INDEX idx_contact_submissions_responded ON contact_submissions (responded) WHERE NOT responded;
