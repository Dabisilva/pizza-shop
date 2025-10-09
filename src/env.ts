import { z } from 'zod'

const envSchema = z.object({
  MODE: z.enum(['production', 'development', 'test']),
  VITE_API_URL: z.string().default('http://localhost:3000'),
  VITE_ENABLE_API_DALAY: z
    .string()
    .optional()
    .default('false')
    .transform((value) => value === 'true'),
})

export const env = envSchema.parse(import.meta.env)
