import { z } from "zod";

// Zod schema for user validation
export const UserSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Invalid email format"),
  role: z.enum(["admin", "user"]),
});

export type User = z.infer<typeof UserSchema>;
