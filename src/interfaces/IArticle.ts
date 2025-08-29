import type { IPost } from '@/interfaces/IPost'

export type IArticleContext = {
  article: IPost | null
  isLoading: boolean
  error: Error | null
}
