import { BlogLayout } from '@/layouts/BlogLayout/BlogLayout'
import { Article } from '@/pages/Article/Article'
import { Feed } from '@/pages/Feed/Feed'

export function Blog() {
  const query = new URLSearchParams(window.location.search)
  const id = query.get('id')
  const hasSelectedArticle = !!id

  return <BlogLayout>{hasSelectedArticle ? <Article /> : <Feed />}</BlogLayout>
}
