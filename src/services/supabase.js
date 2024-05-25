import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://yttpcyjdfnbqrnalkkny.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0dHBjeWpkZm5icXJuYWxra255Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUzNzc2MDMsImV4cCI6MjAzMDk1MzYwM30.Hg6gAuqlQXcEprZBXYdlWfZ_qNEtoUnCXAP_koMPbOc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
