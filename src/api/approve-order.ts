import { api } from '@/lib/axios'

export interface ApproveOrderQuery {
  id: string
}

export async function approveOrder({ id }: ApproveOrderQuery) {
  await api.patch(`/orders/${id}/approve`)
}
