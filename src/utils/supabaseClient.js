import { createClient } from "@supabase/supabase-js";

const SUPABASEURL = import.meta.env.VITE_SUPABASE_URL
const SUPABASEANON = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(SUPABASEURL, SUPABASEANON);