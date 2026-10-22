import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { ReactNode } from 'react'

// 컴포넌트 밖에서 한 번만 만든다.
// 컴포넌트 안에서 만들면 렌더링될 때마다 새 클라이언트가 생겨 캐시가 사라진다.
const queryClient = new QueryClient()

export function QueryProvider({ children }: { children: ReactNode }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}