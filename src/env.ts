import { z } from 'zod'

const envSchema = z.object({
  VITE_API_URL: z.string().url(),
  VITE_ENABLE_API_DALAY: z.string().transform((value) => value === 'true'),
})

export const env = envSchema.parse(import.meta.env)
