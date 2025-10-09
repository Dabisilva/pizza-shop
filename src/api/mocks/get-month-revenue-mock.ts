export interface MonthRevenueResponse {
  receipt: number
  diffFromLastMonth: number
}

export async function getMonthRevenue(): Promise<MonthRevenueResponse> {
  return {
    receipt: 20000,
    diffFromLastMonth: 12,
  }
}
