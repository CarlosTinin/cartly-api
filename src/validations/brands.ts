import { z } from 'zod';

export const BrandSchema = z.object({
  brands: z.array(z.object( {name: z.string().min(2).max(25)} ))
}); 