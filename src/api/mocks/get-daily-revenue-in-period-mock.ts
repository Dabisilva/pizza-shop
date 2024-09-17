import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '01/07/2024', receipt: 2000 },
    { date: '02/07/2024', receipt: 1830 },
    { date: '03/07/2024', receipt: 2170 },
    { date: '04/07/2024', receipt: 2300 },
    { date: '05/07/2024', receipt: 1980 },
    { date: '06/07/2024', receipt: 1900 },
    { date: '07/07/2024', receipt: 2110 },
  ])
})
