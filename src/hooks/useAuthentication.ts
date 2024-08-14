import { isAxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'

import { api } from '@/lib/axios'

export function useAuthentication() {
  const navigate = useNavigate()

  function checkAuthentication() {
    const interceptorId = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (isAxiosError(error)) {
          const status = error.response?.status
          const code = error.response?.data.code

          if (status === 401 && code === 'UNAUTHORIZED') {
            navigate('/sign-in', { replace: true })
          }
        }
      },
    )
    return () => {
      api.interceptors.response.eject(interceptorId)
    }
  }

  return { checkAuthentication }
}
