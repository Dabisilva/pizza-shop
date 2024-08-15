import { api } from '@/lib/axios'

export interface MonthRevenueResponse {
  receipt: number
  diffFromLastMonth: number
}

export async function getMonthRevenue() {
  const response = await api.get<MonthRevenueResponse>('/metrics/month-receipt')

  return response.data
}
