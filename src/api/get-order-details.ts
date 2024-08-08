import { api } from '@/lib/axios'

export interface GetOrderDetailsQuery {
  id: string
}

export interface GetOrdersResponse {
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
  id: string
  createdAt: string
  totalInCents: number
  customer: {
    name: string
    email: string
    phone: string | null
  }
  orderItems: {
    id: string
    priceInCents: number
    quantity: number
    product: {
      name: string
    }
  }[]
}

export async function getOrderDetails({ id }: GetOrderDetailsQuery) {
  const response = await api.get<GetOrdersResponse>(`/orders/${id}`)

  return response.data
}
