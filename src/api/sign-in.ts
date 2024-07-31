import { api } from '@/lib/axios'

export type SignInBody = {
  email: string
}

export async function signIn({ email }: SignInBody) {
  await api.post('/authenticate', { email })
}
