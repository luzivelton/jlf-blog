import { QueryProvider } from './components/QueryProvider'
import { IconProvider } from './components/IconProvider'

type ProvidersProps = {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <QueryProvider>
      <IconProvider>{children}</IconProvider>
    </QueryProvider>
  )
}
