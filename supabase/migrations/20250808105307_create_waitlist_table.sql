-- Create waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
    id UUID DEFAULT gen_random_uuid () PRIMARY KEY,
    name VARCHAR(120) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    company VARCHAR(200) NOT NULL,
    title VARCHAR(120),
    challenges TEXT,
    client_count VARCHAR(50),
    source VARCHAR(120) DEFAULT 'website',
    created_at TIMESTAMP
    WITH
        TIME ZONE DEFAULT NOW (),
        updated_at TIMESTAMP
    WITH
        TIME ZONE DEFAULT NOW ()
);
