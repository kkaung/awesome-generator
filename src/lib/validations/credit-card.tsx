import { z } from 'zod';

export const creditCardSchema = z.object({
    brand: z.string().optional(),
});
