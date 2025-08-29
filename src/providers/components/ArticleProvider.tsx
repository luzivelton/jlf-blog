import { ArticleContext } from '@/contexts/ArticleContext'
import { useArticleData } from '@/hooks/useDataHooks'
import type { IArticleContext } from '@/interfaces/IArticle'
import { usePosts } from '@/pages/Feed/hooks/usePosts'
import { useMemo } from 'react'

type ArticleProviderProps = {
  children: React.ReactNode
  id: string
}

export function ArticleProvider({ children, id }: ArticleProviderProps) {
  const {
    data: articleRaw,
    error,
    isLoading: isLoadingRaw,
  } = useArticleData(id)
  const { getPostById } = usePosts()

  const feedData = useMemo(() => {
    return getPostById(id)
  }, [getPostById, id])

  const isLoading = isLoadingRaw && !feedData

  const article = useMemo<IArticleContext['article']>(
    () => ({
      ...feedData,
      ...articleRaw,
    }),
    [articleRaw, feedData]
  )

  const value = useMemo<IArticleContext>(
    () => ({
      article,
      error,
      isLoading,
    }),
    [article, error, isLoading]
  )

  return (
    <ArticleContext.Provider value={value}>{children}</ArticleContext.Provider>
  )
}
