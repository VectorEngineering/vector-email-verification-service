ALTER TABLE email_results
ADD created_at TIMESTAMPTZ NOT NULL DEFAULT NOW();