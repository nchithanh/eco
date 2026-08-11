-- Dolphin leads — run once in D1 console (or Worker auto-creates on first POST)
CREATE TABLE IF NOT EXISTS leads (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL,
  source TEXT NOT NULL,
  name TEXT NOT NULL,
  contact TEXT NOT NULL,
  note TEXT,
  locale TEXT,
  payload TEXT,
  ip TEXT,
  user_agent TEXT
);

CREATE INDEX IF NOT EXISTS idx_leads_created ON leads(created_at DESC);
