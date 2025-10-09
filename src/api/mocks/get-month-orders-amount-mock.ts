export interface MonthOrdersAmountResponse {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthOrdersAmount(): Promise<MonthOrdersAmountResponse> {
  return {
    amount: 100,
    diffFromLastMonth: 1,
  }
}
