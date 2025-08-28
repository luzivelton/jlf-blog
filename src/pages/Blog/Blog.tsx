import { useUrlQuery } from '@/components/Link/hooks/useUrlQuery'
import { Article } from '@/pages/Article/Article'
import { Feed } from '@/pages/Feed/Feed'

export function Blog() {
  const { id } = useUrlQuery('id')
  const hasSelectedArticle = !!id

  return hasSelectedArticle ? <Article /> : <Feed />
}
