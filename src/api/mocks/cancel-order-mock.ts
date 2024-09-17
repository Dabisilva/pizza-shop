import { http, HttpResponse } from 'msw'

import { CancelOrderQuery } from '../cancel-order'

export const cancelOrderMock = http.patch<CancelOrderQuery, never, never>(
  '/orders/:id/cancel',
  async ({ params }) => {
    if (params.id === 'error-order-id') {
      return new HttpResponse(null, { status: 400 })
    }

    return new HttpResponse(null, { status: 204 })
  },
)
