import type { IAuthor } from '@/interfaces/IAuthor'
import type { IPost } from '@/interfaces/IPost'

export interface ICategory {
  id: string
  name: string
  createdAt: string
  updatedAt: string
  postId: string
}

export interface IFiltersContext {
  selectedCategories: string[]
  categoryOptions: { label: string; value: string }[]
  updateCategories: (changedItem: string) => IFilterEvent
  getCategoryById: (id: string) => ICategory | undefined
  categoryIsLoading: boolean
  filterByCategory: (posts: IPost[], selectedCategories: string[]) => IPost[]

  selectedAuthors: string[]
  authorOptions: { label: string; value: string }[]
  updateAuthors: (changedItem: string) => IFilterEvent
  getAuthorById: (id: string) => IAuthor | undefined
  authorIsLoading: boolean
  filterByAuthor: (posts: IPost[], selectedAuthors: string[]) => IPost[]
}

export type IFilterEvent = {
  updatedCategories?: string[]
  updatedAuthors?: string[]
}
