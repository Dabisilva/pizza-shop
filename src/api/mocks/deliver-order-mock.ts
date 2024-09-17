import { http, HttpResponse } from 'msw'

import { DeliveredOrderQuery } from '../delivered-order'

export const deliverOrderMock = http.patch<DeliveredOrderQuery, never, never>(
  '/orders/:id/deliver',
  async ({ params }) => {
    if (params.id === 'error-order-id') {
      return new HttpResponse(null, { status: 400 })
    }

    return new HttpResponse(null, { status: 204 })
  },
)
