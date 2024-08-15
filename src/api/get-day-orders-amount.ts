import { api } from '@/lib/axios'

export interface DayOrdersAmountResponse {
  amount: number
  diffFromYesterday: number
}

export async function getDayOrdersAmount() {
  const response = await api.get<DayOrdersAmountResponse>(
    '/metrics/day-orders-amount',
  )

  return response.data
}
