export interface UpdateProfileBody {
  name: string
  description: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function updateProfile(_body: UpdateProfileBody) {
  return Promise.resolve()
}
