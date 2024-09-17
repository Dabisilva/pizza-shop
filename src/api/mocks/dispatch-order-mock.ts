import { http, HttpResponse } from 'msw'

import { DispatchOrderQuery } from '../dispatch-order'

export const dispatchOrderMock = http.patch<DispatchOrderQuery, never, never>(
  '/orders/:id/dispatch',
  async ({ params }) => {
    if (params.id === 'error-order-id') {
      return new HttpResponse(null, { status: 400 })
    }

    return new HttpResponse(null, { status: 204 })
  },
)
