import { z } from "zod";

export const finishSchema = z.object({
  username: z.string().min(2).max(50),
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50).optional(),
});

export type FinishSchema = typeof finishSchema;
