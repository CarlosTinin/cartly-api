import { z } from 'zod';
import { PantryProductSchema } from './pantry_products';

export const PantrySchema= z.object({
  name: z.string().min(2).max(30),
  products: z.array(PantryProductSchema).optional()
});