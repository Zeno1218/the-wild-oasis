import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://figkpoeidrbscnjrzpui.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpZ2twb2VpZHJic2NuanJ6cHVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM5MzM3MTQsImV4cCI6MjA3OTUwOTcxNH0.y1jnPDIDa-dMXQ249Tyw1YIOpWZptN4S0ep93r_Q09I";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
