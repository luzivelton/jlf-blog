import { useContext } from 'react'
import { ArticleContext } from '@/contexts/ArticleContext'

export const useArticle = () => {
  const context = useContext(ArticleContext)
  if (!context) {
    throw new Error('useArticle must be used within an ArticleProvider')
  }
  return context
}
