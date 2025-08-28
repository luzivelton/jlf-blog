import { useUrlQuery } from '@/components/Link/hooks/useUrlQuery'
import { BlogLayout } from '@/layouts/BlogLayout/BlogLayout'
import { Article } from '@/pages/Article/Article'
import { Feed } from '@/pages/Feed/Feed'

export function Blog() {
  const { id } = useUrlQuery('id')
  const hasSelectedArticle = !!id

  return <BlogLayout>{hasSelectedArticle ? <Article /> : <Feed />}</BlogLayout>
}
