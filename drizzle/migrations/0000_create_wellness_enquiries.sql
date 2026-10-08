CREATE TABLE public.wellness_enquiries (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 full_name text NOT NULL,
 email text NOT NULL,
 company text NOT NULL,
 phone text NOT NULL,
 topic text NOT NULL,
 attendees text,
 format text,
 city text,
 timing text,
 notes text,
 source jsonb NOT NULL DEFAULT '{}'::jsonb,
 consent_at timestamptz NOT NULL,
 status text NOT NULL DEFAULT 'New' CHECK (status IN ('New','Contacted','Qualified','Scheduled','Closed')),
 internal_notes text
);
GRANT ALL ON public.wellness_enquiries TO service_role;
REVOKE ALL ON public.wellness_enquiries FROM anon, authenticated;
ALTER TABLE public.wellness_enquiries ENABLE ROW LEVEL SECURITY;
COMMENT ON TABLE public.wellness_enquiries IS 'Private corporate enquiries. Validated public server action inserts only; no client grants or public read policies.';