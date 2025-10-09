export interface GetManegedRestaurantResponse {
  id: string
  name: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export async function getManegedRestaurant(): Promise<GetManegedRestaurantResponse> {
  return {
    id: 'custom-restaurant-id',
    name: 'Pizza Shop',
    description: 'Custom restaurant description.',
    managerId: 'custom-user-id',
    createdAt: new Date(),
    updatedAt: null,
  }
}
