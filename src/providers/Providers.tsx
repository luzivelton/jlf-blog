import { QueryProvider } from '@/providers/components/QueryProvider'

type ProvidersProps = {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return <QueryProvider>{children}</QueryProvider>
}
