import { z } from 'zod'

export const ProductSchema = z.object({
  name: z.string().min(2).max(20),
  actual_price: z.number({
    required_error: "É necessário fornecer um preço.",
    invalid_type_error: "O preço deve ser numérico.",
  }).positive().safe(),
  category_id: z.number().positive().safe(),
  brand_id: z.number().positive().safe()
});