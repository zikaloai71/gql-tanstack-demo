import { z } from "zod";

// Zod schema for user validation
export const ProductSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  stock: z.number().int().min(0, "Stock must be greater than or equal to 0"),
});

export type Product = z.infer<typeof ProductSchema>