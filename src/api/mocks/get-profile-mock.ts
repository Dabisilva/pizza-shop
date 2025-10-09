export interface GetProfileResponse {
  id: string
  name: string
  email: string
  phone: string | null
  role: 'manager' | 'customer'
  createdAt: Date | null
  updatedAt: Date | null
}

export async function getProfile(): Promise<GetProfileResponse> {
  return {
    id: 'custom-user-id',
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '81237127123',
    role: 'manager',
    createdAt: new Date(),
    updatedAt: null,
  }
}
