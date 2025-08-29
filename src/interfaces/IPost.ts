import type { IAuthor } from './IAuthor'
import type { ICategory } from './IFilters'

export interface IPost {
  id: string
  title: string
  content: string
  thumbnail_url: string
  authorId: string
  createdAt: string
  updatedAt: string
  categories: ICategory[]
  author: IAuthor
}

export interface IPostsContext {
  posts: IPost[]
  isLoading: boolean
  error: Error | null
  selectedAuthors: string[]
  updateAuthors: (newAuthorIds: string[]) => void
  getPostById: (id: string) => IPost
  getPostsByAuthor: (authorId: string) => IPost[]
}

export type _sortType = 'date_asc' | 'date_desc' | 'title_asc' | 'title_desc'
