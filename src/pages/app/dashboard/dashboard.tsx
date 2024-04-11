import { DollarSign, Utensils } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { DashboardCard } from './components/dashboard-card'
import { PopularProductsChart } from './components/popular-products.chart'
import { RenevueChart } from './components/revenue-chart'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <DashboardCard
            title="Receita total do (mês)"
            value="R$1240"
            text="em relação ao mês passado"
            percentage={2}
            Icon={DollarSign}
          />
          <DashboardCard
            title="Pedidos (mês)"
            value="246"
            percentage={6}
            text="em relação ao mês passado"
            Icon={Utensils}
          />
          <DashboardCard
            title="Pedidos (dia)"
            value="12"
            percentage={-4}
            text="em relação a ontem"
            Icon={Utensils}
          />
          <DashboardCard
            title="Cancelamentos (mês)"
            value="2"
            percentage={-2}
            text="em relação ao mês passado"
            Icon={DollarSign}
          />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RenevueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}
