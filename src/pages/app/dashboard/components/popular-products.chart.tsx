import { BarChart } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import colors from 'tailwindcss/colors'

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
  const data = [
    {
      product: 'Peperone',
      amount: 40,
    },
    {
      product: 'Catupiri',
      amount: 30,
    },
    {
      product: 'Calabresa',
      amount: 30,
    },
    {
      product: '4 queijos',
      amount: 20,
    },
    {
      product: 'Portuguesa',
      amount: 50,
    },
  ]

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

    return (
      <text
        x={x}
        y={y}
        className="fill-muted-foreground text-xs"
        textAnchor={x > item.cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {data[item.index].product.length > 12
          ? data[item.index].product.substring(0, 12).concat('...')
          : data[item.index].product}{' '}
        ({item.value})
      </text>
    )
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
        <ResponsiveContainer width="100%" height={240}>
          <PieChart style={{ fontSize: 12 }}>
            <Pie
              data={data}
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
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index]}
                  className="stroke-card hover:opacity-80"
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
