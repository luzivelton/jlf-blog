import { QueryProvider } from './components/QueryProvider'
import { IconProvider } from './components/IconProvider'
import { BlogProviders } from '@/pages/Blog/providers/BlogProviders'

type ProvidersProps = {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <QueryProvider>
      <IconProvider>
        <BlogProviders>{children}</BlogProviders>
      </IconProvider>
    </QueryProvider>
  )
}
