import { api } from '@/lib/axios'

export interface CancelOrderQuery {
  id: string
}

export async function cancelOrder({ id }: CancelOrderQuery) {
  await api.patch(`/orders/${id}/cancel`)
}
