import { api } from '@/lib/axios'

export interface DeliveredOrderQuery {
  id: string
}

export async function deliveredOrder({ id }: DeliveredOrderQuery) {
  await api.patch(`/orders/${id}/deliver`)
}
