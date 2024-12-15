import { z } from "zod";


export const CountrySchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  phone: z.string().min(1, "Phone is required").max(100, "Phone is too long"),
  currency: z.string().min(1, "Currency is required").max(100, "Currency is too long"),
});

export type Country = z.infer<typeof CountrySchema>;
