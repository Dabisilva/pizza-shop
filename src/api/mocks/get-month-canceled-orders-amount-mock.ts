export interface MonthCanceledOrdersAmountResponse {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthCanceledOrdersAmount(): Promise<MonthCanceledOrdersAmountResponse> {
  return {
    amount: 5,
    diffFromLastMonth: -5,
  }
}
