import { useQuery } from '@tanstack/react-query'
import { Utensils } from 'lucide-react'

import { getMonthOrdersAmount } from '@/api/get-month-orders-amount'

import { DashboardCard } from './dashboard-card'

export function MonthOrdersAmountCard() {
  const { data: monthOrdersAmount, isLoading } = useQuery({
    queryKey: ['metrics', 'month-orders-amount'],
    queryFn: getMonthOrdersAmount,
  })

  const value = monthOrdersAmount
    ? monthOrdersAmount.amount.toLocaleString('pt-BR')
    : 0
  const percentage = monthOrdersAmount ? monthOrdersAmount.diffFromLastMonth : 0

  return (
    <DashboardCard
      title="Pedidos (mês)"
      value={value}
      percentage={percentage}
      text="em relação ao mês passado"
      Icon={Utensils}
      loading={isLoading}
    />
  )
}
