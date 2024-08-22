import { useQuery } from '@tanstack/react-query'
import { BarChart, Loader2 } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import colors from 'tailwindcss/colors'

import { getPopularProducts } from '@/api/get-popular-products'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type LabelProps = {
  midAngle: number
  cx: string
  cy: string
  startAngle: number
  innerRadius: number
  outerRadius: number
  index: number
  value: string
}

export function PopularProductsChart() {
  const { data: popularProducts, isLoading } = useQuery({
    queryKey: ['metrics', 'popular-products'],
    queryFn: getPopularProducts,
  })

  const COLORS = [
    colors.sky['500'],
    colors.amber['500'],
    colors.violet['500'],
    colors.emerald['500'],
    colors.rose['500'],
  ]

  function Label(item: LabelProps) {
    const RADIAN = Math.PI / 180
    const radius = 12 + item.innerRadius + (item.outerRadius - item.innerRadius)
    const x = item.cx + radius * Math.cos(-item.midAngle * RADIAN)
    const y = item.cy + radius * Math.sin(-item.midAngle * RADIAN)

    if (!popularProducts) return null

    return (
      <text
        x={x}
        y={y}
        className="fill-muted-foreground text-xs"
        textAnchor={x > item.cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {popularProducts[item.index].product.length > 12
          ? popularProducts[item.index].product.substring(0, 12).concat('...')
          : popularProducts[item.index].product}{' '}
        ({item.value})
      </text>
    )
  }

  function Content() {
    if (isLoading) {
      return (
        <div className="flex h-[240px] w-full items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      )
    } else {
      return (
        <>
          {popularProducts?.length ? (
            <ResponsiveContainer width="100%" height={240}>
              <PieChart style={{ fontSize: 12 }}>
                <Pie
                  data={popularProducts}
                  dataKey="amount"
                  nameKey="product"
                  cx="50%"
                  cy="50%"
                  outerRadius={86}
                  innerRadius={64}
                  strokeWidth={8}
                  labelLine={false}
                  label={Label}
                >
                  {popularProducts.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index]}
                      className="stroke-card hover:opacity-80"
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex h-[240px] w-full items-center justify-center">
              <span className="font-bold">Sem dados no momento</span>
            </div>
          )}
        </>
      )
    }
  }

  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Produtos populares
          </CardTitle>
          <BarChart className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <Content />
      </CardContent>
    </Card>
  )
}
