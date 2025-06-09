-- Add starred field to todos table
ALTER TABLE todos ADD COLUMN IF NOT EXISTS starred BOOLEAN DEFAULT FALSE;

-- Create default projects function
CREATE OR REPLACE FUNCTION create_default_projects(user_id UUID)
RETURNS VOID AS $$
BEGIN
  -- Check if user already has projects
  IF NOT EXISTS (SELECT 1 FROM events WHERE events.user_id = create_default_projects.user_id) THEN
    INSERT INTO events (id, title, description, user_id, start_time, end_time, created_at, updated_at)
    VALUES 
      (gen_random_uuid(), 'Personal', 'Personal tasks and life management', create_default_projects.user_id, NOW(), NOW(), NOW(), NOW()),
      (gen_random_uuid(), 'Work', 'Professional tasks and projects', create_default_projects.user_id, NOW(), NOW(), NOW(), NOW()),
      (gen_random_uuid(), 'Goals', 'Long-term objectives and milestones', create_default_projects.user_id, NOW(), NOW(), NOW(), NOW()),
      (gen_random_uuid(), 'Home', 'Household tasks and family matters', create_default_projects.user_id, NOW(), NOW(), NOW(), NOW()),
      (gen_random_uuid(), 'Learning', 'Education and skill development', create_default_projects.user_id, NOW(), NOW(), NOW(), NOW()),
      (gen_random_uuid(), 'Ideas', 'Creative projects and future plans', create_default_projects.user_id, NOW(), NOW(), NOW(), NOW());
  END IF;
END;
$$ LANGUAGE plpgsql;

-- Create sample tasks function
CREATE OR REPLACE FUNCTION create_sample_tasks(user_id UUID)
RETURNS VOID AS $$
DECLARE
  personal_project_id UUID;
  work_project_id UUID;
  goals_project_id UUID;
BEGIN
  -- Get project IDs
  SELECT id INTO personal_project_id FROM events WHERE events.user_id = create_sample_tasks.user_id AND title = 'Personal' LIMIT 1;
  SELECT id INTO work_project_id FROM events WHERE events.user_id = create_sample_tasks.user_id AND title = 'Work' LIMIT 1;
  SELECT id INTO goals_project_id FROM events WHERE events.user_id = create_sample_tasks.user_id AND title = 'Goals' LIMIT 1;

  -- Create sample tasks
  IF personal_project_id IS NOT NULL THEN
    INSERT INTO todos (id, title, description, event_id, user_id, priority, completed, starred, due_date, created_at, updated_at)
    VALUES 
      (gen_random_uuid(), 'Buy groceries', 'Weekly grocery shopping', personal_project_id, create_sample_tasks.user_id, 'medium', false, false, CURRENT_DATE + INTERVAL '2 days', NOW(), NOW()),
      (gen_random_uuid(), 'Schedule dentist appointment', 'Annual checkup', personal_project_id, create_sample_tasks.user_id, 'low', false, true, CURRENT_DATE + INTERVAL '1 week', NOW(), NOW());
  END IF;

  IF work_project_id IS NOT NULL THEN
    INSERT INTO todos (id, title, description, event_id, user_id, priority, completed, starred, due_date, created_at, updated_at)
    VALUES 
      (gen_random_uuid(), 'Finish quarterly report', 'Q4 performance analysis', work_project_id, create_sample_tasks.user_id, 'high', false, true, CURRENT_DATE + INTERVAL '3 days', NOW(), NOW()),
      (gen_random_uuid(), 'Team meeting preparation', 'Prepare agenda and materials', work_project_id, create_sample_tasks.user_id, 'medium', false, false, CURRENT_DATE + INTERVAL '1 day', NOW(), NOW());
  END IF;

  IF goals_project_id IS NOT NULL THEN
    INSERT INTO todos (id, title, description, event_id, user_id, priority, completed, starred, due_date, created_at, updated_at)
    VALUES 
      (gen_random_uuid(), 'Read 2 books this month', 'Continue learning habit', goals_project_id, create_sample_tasks.user_id, 'low', false, false, CURRENT_DATE + INTERVAL '2 weeks', NOW(), NOW()),
      (gen_random_uuid(), 'Exercise 3x this week', 'Maintain fitness routine', goals_project_id, create_sample_tasks.user_id, 'medium', false, true, CURRENT_DATE + INTERVAL '5 days', NOW(), NOW());
  END IF;
END;
$$ LANGUAGE plpgsql;
