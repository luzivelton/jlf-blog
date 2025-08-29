import { QueryProvider } from './components/QueryProvider'
import { IconProvider } from './components/IconProvider'
import { BlogProviders } from '@/pages/Blog/providers/BlogProviders'
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary'

type ProvidersProps = {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ErrorBoundary>
      <QueryProvider>
        <IconProvider>
          <BlogProviders>{children}</BlogProviders>
        </IconProvider>
      </QueryProvider>
    </ErrorBoundary>
  )
}
