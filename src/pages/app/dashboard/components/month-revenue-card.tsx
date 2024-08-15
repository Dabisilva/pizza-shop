import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getMonthRevenue } from '@/api/get-month-revenue'

import { DashboardCard } from './dashboard-card'

export function MonthRevenueCard() {
  const { data: monthRevenue, isLoading } = useQuery({
    queryKey: ['metrics', 'month-revenue'],
    queryFn: getMonthRevenue,
  })

  const value = monthRevenue
    ? monthRevenue.receipt.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
    : 0
  const percentage = monthRevenue ? monthRevenue.diffFromLastMonth : 0

  return (
    <DashboardCard
      title="Receita total do (mês)"
      value={value}
      percentage={percentage}
      text="em relação ao mês passado"
      Icon={DollarSign}
      loading={isLoading}
    />
  )
}
