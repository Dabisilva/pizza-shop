import { useQuery } from '@tanstack/react-query'
import { Utensils } from 'lucide-react'

import { getDayOrdersAmount } from '@/api/get-day-orders-amount'

import { DashboardCard } from './dashboard-card'

export function DayOrdersAmountCard() {
  const { data: dayOrdersAmount, isLoading } = useQuery({
    queryKey: ['metrics', 'day-orders-amount'],
    queryFn: getDayOrdersAmount,
  })

  const value = dayOrdersAmount
    ? dayOrdersAmount.amount.toLocaleString('pt-BR')
    : 0
  const percentage = dayOrdersAmount ? dayOrdersAmount.diffFromYesterday : 0

  return (
    <DashboardCard
      title="Pedidos (dia)"
      value={value}
      percentage={percentage}
      text="em relação a ontem"
      Icon={Utensils}
      loading={isLoading}
    />
  )
}
