import { http, HttpResponse } from 'msw'

import { MonthOrdersAmountResponse } from '../get-month-orders-amount'

export const getMonthOrdersAmountMock = http.get<
  never,
  never,
  MonthOrdersAmountResponse
>('/metrics/month-orders-amount', () => {
  return HttpResponse.json({
    amount: 100,
    diffFromLastMonth: 1,
  })
})
