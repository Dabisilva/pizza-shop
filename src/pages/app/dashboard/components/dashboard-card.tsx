import { LucideProps } from 'lucide-react'
import { ForwardRefExoticComponent } from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

type DashboardCardProps = {
  title: string
  value?: string | number
  percentage: number
  text: string
  Icon: ForwardRefExoticComponent<LucideProps>
  loading?: boolean
}

export function DashboardCard({
  title,
  value,
  percentage,
  text,
  Icon,
  loading = false,
}: DashboardCardProps) {
  const isPositive = percentage >= 0

  const textColor = isPositive
    ? 'text-emerald-500 dark:text-emerald-400'
    : 'text-rose-500 dark:text-rose-400'

  function LoadingComponent() {
    return (
      <CardContent className="space-y-1">
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-4" />
      </CardContent>
    )
  }

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      {loading ? (
        <LoadingComponent />
      ) : (
        <CardContent className="space-y-1">
          <span className="text-2xl font-bold tracking-tight">{value}</span>
          <p className="text-xs text-muted-foreground">
            <span className={textColor}>
              {isPositive ? `+${percentage}% ` : `${percentage}% `}
            </span>
            {text}
          </p>
        </CardContent>
      )}
    </Card>
  )
}
