import { redirect } from "@sveltejs/kit";

import type { Actions } from "./$types";
import type { PageServerLoad } from "./$types";
import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { signupSchema } from "./schema";

export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(zod(signupSchema)),
  };
};

export const actions: Actions = {
  signup: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData();
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const username = formData.get("username") as string;
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;

    const { error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          user_name: username,
          first_name: firstName,
          last_name: lastName,
        },
      },
    });
    if (authError) {
      console.error(authError);
      redirect(303, "/auth/error");
    }

    redirect(303, "/");
  },
};
