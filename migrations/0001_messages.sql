CREATE TABLE messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  form_id TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  fields TEXT NOT NULL,
  ip_hash TEXT NOT NULL
);

CREATE INDEX messages_limit ON messages (form_id, ip_hash, created_at);
CREATE INDEX messages_created ON messages (created_at);
