export interface CancelOrderQuery {
  id: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function cancelOrder(_query: CancelOrderQuery) {
  return Promise.resolve()
}
