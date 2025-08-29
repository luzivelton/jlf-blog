import { useUrlQuery } from '@/components/Link/hooks/useUrlQuery'
import { Article } from '@/pages/Article/Article'
import { Feed } from '@/pages/Feed/Feed'
import { useEffect } from 'react'

export function Blog() {
  const { id } = useUrlQuery('id')
  const hasSelectedArticle = !!id

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  return hasSelectedArticle ? <Article id={id} /> : <Feed />
}
