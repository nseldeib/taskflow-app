-- Add starred field to todos table (this should work regardless of database functions)
ALTER TABLE todos ADD COLUMN IF NOT EXISTS starred BOOLEAN DEFAULT FALSE;

-- Update existing todos to have starred = false if null
UPDATE todos SET starred = false WHERE starred IS NULL;
