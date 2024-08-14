import { api } from '@/lib/axios'

export interface DispatchOrderQuery {
  id: string
}

export async function dispatchOrder({ id }: DispatchOrderQuery) {
  await api.patch(`/orders/${id}/dispatch`)
}
