import { ErrorBoundary } from '@/providers/ErrorBoundary/ErrorBoundary'
import { ArticleContent } from '@/pages/Article/components/ArticleContent/ArticleContent'
import { ArticleLayout } from '@/pages/Article/components/ArticleLayout/ArticleLayout'
import { ArticleProvider } from '@/providers/ArticleProvider/ArticleProvider'

type ArticleProps = {
  id: string
}

export function Article({ id }: ArticleProps) {
  return (
    <ArticleProvider id={id}>
      <ArticleLayout>
        <ErrorBoundary>
          <ArticleContent />
        </ErrorBoundary>
      </ArticleLayout>
    </ArticleProvider>
  )
}
