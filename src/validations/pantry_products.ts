import { z } from 'zod';

export const PantryProductSchema = z.object({
  product_id: z.number().positive().safe(),
  unit_id: z.number().positive().safe(),
  quantity: z.number().positive().safe()
});