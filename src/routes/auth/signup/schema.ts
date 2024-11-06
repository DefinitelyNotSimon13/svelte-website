import { z } from "zod";

export const signupSchema = z.object({
  username: z.string().min(2).max(50),
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50).optional(),
  email: z.string().email(),
  password: z.string().min(8).max(50),
});

export type SignupSchema = typeof signupSchema;
