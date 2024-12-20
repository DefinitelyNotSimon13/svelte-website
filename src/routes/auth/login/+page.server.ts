import { redirect } from "@sveltejs/kit";

import type { Actions } from "./$types";
import type { PageServerLoad } from "./$types";
import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { loginSchema } from "./schema";

export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(zod(loginSchema)),
  };
};

export const actions: Actions = {
  login: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData();
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error(error);
      redirect(303, "/auth/error");
    } else {
      redirect(303, "/private");
    }
  },

  continueWithGithub: async ({ request, locals: { supabase } }) => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `localhost:5173/auth/callback`,
      },
    });
    if (error) {
      console.error("GH error:", error);
    }

    if (data.url) {
      console.log("DataUrl:", data.url);
      redirect(303, data.url);
    } else {
      console.log("NoUrl");
    }
  },

  continueWithGoogle: async ({ request, locals: { supabase } }) => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `localhost:5173/auth/callback`,
      },
    });
    if (error) {
      console.error("Google error:", error);
    }

    if (data.url) {
      console.log("DataUrl:", data.url);
      redirect(303, data.url);
    } else {
      console.log("NoUrl");
    }
  },
};
