import type { PostgrestResponse } from "@supabase/supabase-js";
import type { Country } from "$types/database";
import { error as svelteError } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
  const { data, error }: PostgrestResponse<Country> = await supabase
    .from("countries")
    .select();
  if (error) {
    console.error("Error loading countries:", error);
    svelteError(500, error);
  }
  return {
    countries: data ?? [],
  };
};
