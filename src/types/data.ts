import type { Session, SupabaseClient, User } from "@supabase/supabase-js";

export interface Data {
  session: Session | null;
  supabase: SupabaseClient<any, "public", any>;
  user: User | null;
}
