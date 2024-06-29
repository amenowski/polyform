import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dqzbjenzkjjfzhnvychp.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY as string;

if (!process.env.SUPABASE_KEY) {
  throw new Error("SUPABASE_KEY environment variable is not set");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
