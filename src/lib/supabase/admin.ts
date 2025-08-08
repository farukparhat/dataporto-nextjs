import { createClient } from "@supabase/supabase-js";

// WARNING: This is a server-side client. Do not use on user authenticated actions.

const supabaseAdminClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default supabaseAdminClient;
