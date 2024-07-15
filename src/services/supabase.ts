import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dqzbjenzkjjfzhnvychp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxemJqZW56a2pqZnpobnZ5Y2hwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk0MTYwODQsImV4cCI6MjAzNDk5MjA4NH0.4nVVqma6dJ5oCjmJW6Jr2nSWSwGHURywdc6whTiPbYo";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
