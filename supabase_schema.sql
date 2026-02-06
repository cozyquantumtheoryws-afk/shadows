-- Shadows Project: Supabase Schema Setup
-- Identity: Nocturnal Systems Auditor
-- Version: EB-992-X

-- Create user_purchases table
CREATE TABLE IF NOT EXISTS public.user_purchases (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE,
    access_key TEXT UNIQUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create content_blocks table
CREATE TABLE IF NOT EXISTS public.content_blocks (
    id TEXT PRIMARY KEY, -- Using 'latest' or specific chapter IDs
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS (Optional but recommended)
-- ALTER TABLE public.user_purchases ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE public.content_blocks ENABLE ROW LEVEL SECURITY;

-- Note: The API uses the Service Role Key for access, bypassing RLS.
-- If using Client Key, appropriate policies must be established.
