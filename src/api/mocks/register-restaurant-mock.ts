export type RegisterRestaurantBody = {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function registerRestaurant(_body: RegisterRestaurantBody) {
  return Promise.resolve()
}
