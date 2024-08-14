import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'
import { useAuthentication } from '@/hooks/useAuthentication'

export function AppLayout() {
  const { checkAuthentication } = useAuthentication()

  useEffect(() => {
    checkAuthentication()
  })
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />
      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
        <Outlet />
      </div>
    </div>
  )
}
