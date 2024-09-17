import { http, HttpResponse } from 'msw'

import { ApproveOrderQuery } from '../approve-order'

export const approveOrderMock = http.patch<ApproveOrderQuery, never, never>(
  '/orders/:id/approve',
  async ({ params }) => {
    if (params.id === 'error-order-id') {
      return new HttpResponse(null, { status: 400 })
    }

    return new HttpResponse(null, { status: 204 })
  },
)
