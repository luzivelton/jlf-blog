import React from 'react'
import type { IArticleContext } from '@/interfaces/IArticle'

const INITIAL_STATE: IArticleContext = {
  article: null,
  isLoading: false,
  error: null,
}

export const ArticleContext =
  React.createContext<IArticleContext>(INITIAL_STATE)
