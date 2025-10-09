export interface DayOrdersAmountResponse {
  amount: number
  diffFromYesterday: number
}

export async function getDayOrdersAmount(): Promise<DayOrdersAmountResponse> {
  return {
    amount: 20,
    diffFromYesterday: 5,
  }
}
