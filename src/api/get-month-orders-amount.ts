import { api } from '@/lib/axios'

export interface MonthOrdersAmountResponse {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthOrdersAmount() {
  const response = await api.get<MonthOrdersAmountResponse>(
    '/metrics/month-orders-amount',
  )

  return response.data
}
