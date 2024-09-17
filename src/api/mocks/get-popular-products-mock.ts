import { http, HttpResponse } from 'msw'

import { PopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  PopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Peperone', amount: 15 },
    { product: 'Calabresa', amount: 20 },
    { product: '4 queijos', amount: 11 },
    { product: 'Lombo', amount: 7 },
    { product: 'Portuguesa', amount: 18 },
    { product: 'Frango com Catupiry', amount: 23 },
  ])
})
