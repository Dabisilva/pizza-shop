export interface GetOrdersQuery {
  pageIndex?: number | null
  orderId?: string | null
  customerName?: string | null
  status?: string | null
}

export interface GetOrdersResponse {
  orders: {
    orderId: string
    createdAt: string
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string
    total: number
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

type Orders = GetOrdersResponse['orders']
type OrderStatus = GetOrdersResponse['orders'][number]['status']

const statuses: OrderStatus[] = [
  'pending',
  'processing',
  'canceled',
  'delivered',
  'delivering',
]

const orders: Orders = Array.from({ length: 60 }).map((_, i) => {
  const status = statuses[i % 5]
  if (!status) {
    throw new Error('Invalid status index')
  }
  return {
    orderId: `order-${i + 1}`,
    customerName: `Customer ${i + 1}`,
    createdAt: new Date().toISOString(),
    total: 2400,
    status,
  }
})

export async function getOrders({
  pageIndex,
  orderId,
  customerName,
  status,
}: GetOrdersQuery): Promise<GetOrdersResponse> {
  const currentPage = pageIndex ?? 0
  let filteredOrders = orders

  if (customerName) {
    filteredOrders = filteredOrders.filter((order) =>
      order.customerName.includes(customerName),
    )
  }

  if (orderId) {
    filteredOrders = filteredOrders.filter((order) =>
      order.orderId.includes(orderId),
    )
  }

  if (status) {
    filteredOrders = filteredOrders.filter((order) => order.status === status)
  }

  const paginatedOrders = filteredOrders.slice(
    currentPage * 10,
    (currentPage + 1) * 10,
  )

  return {
    orders: paginatedOrders,
    meta: {
      pageIndex: currentPage,
      perPage: 10,
      totalCount: filteredOrders.length,
    },
  }
}
