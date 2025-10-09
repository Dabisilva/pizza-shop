export type SignInBody = {
  email: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function signIn(_body: SignInBody) {
  // Accept any email - no validation needed for test project
  return Promise.resolve()
}
