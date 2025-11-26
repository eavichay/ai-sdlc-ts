-- Migration generated at 2025-11-26T12:59:11.508Z

-- Create table for Task
CREATE TABLE IF NOT EXISTS "tasks" (
  "id" TEXT PRIMARY KEY,
  "title" TEXT NOT NULL,
  "description" TEXT,
  "completed" BOOLEAN NOT NULL DEFAULT false,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Add index for common queries
CREATE INDEX IF NOT EXISTS "idx_tasks_completed" ON "tasks" ("completed");
CREATE INDEX IF NOT EXISTS "idx_tasks_createdAt" ON "tasks" ("createdAt");

-- Create or replace function to update updatedAt timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW."updatedAt" = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for Task
DROP TRIGGER IF EXISTS update_tasks_updated_at ON "tasks";
CREATE TRIGGER update_tasks_updated_at
  BEFORE UPDATE ON "tasks"
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

