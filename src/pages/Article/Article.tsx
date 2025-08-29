import { BlogLayout } from '@/layouts/BlogLayout/BlogLayout'
import { ArticleAside } from '@/pages/Article/components/ArticleAside/ArticleAside'

export function Article() {
  return (
    <BlogLayout>
      <ArticleAside />
    </BlogLayout>
  )
}
