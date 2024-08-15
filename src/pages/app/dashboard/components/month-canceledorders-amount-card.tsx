import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getMonthCanceledOrdersAmount } from '@/api/get-month-canceled-orders-amount'

import { DashboardCard } from './dashboard-card'

export function MonthCanceledOrdersAmountCard() {
  const { data: monthCanceledOrdersAmount, isLoading } = useQuery({
    queryKey: ['metrics', 'month-canceled-orders-amount'],
    queryFn: getMonthCanceledOrdersAmount,
  })

  const value = monthCanceledOrdersAmount
    ? monthCanceledOrdersAmount.amount.toLocaleString('pt-BR')
    : 0
  const percentage = monthCanceledOrdersAmount
    ? monthCanceledOrdersAmount.diffFromLastMonth
    : 0
  return (
    <DashboardCard
      title="Cancelamentos (mês)"
      value={value}
      percentage={percentage}
      text="em relação ao mês passado"
      Icon={DollarSign}
      loading={isLoading}
    />
  )
}
