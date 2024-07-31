import { api } from '@/lib/axios'

export type RegisterRestaurantBody = {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export async function registerRestaurant(body: RegisterRestaurantBody) {
  await api.post('/restaurants', body)
}
