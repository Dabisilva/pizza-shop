export type PopularProductsResponse = {
  product: string
  amount: number
}[]

export async function getPopularProducts(): Promise<PopularProductsResponse> {
  return [
    { product: 'Peperone', amount: 15 },
    { product: 'Calabresa', amount: 20 },
    { product: '4 queijos', amount: 11 },
    { product: 'Lombo', amount: 7 },
    { product: 'Portuguesa', amount: 18 },
    { product: 'Frango com Catupiry', amount: 23 },
  ]
}
