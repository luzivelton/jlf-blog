import type { IAuthor } from '@/interfaces/IAuthor'

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
  updateCategories: (changedItem: string) => void
  getCategoryById: (id: string) => ICategory | undefined
  categoryIsLoading: boolean

  selectedAuthors: string[]
  authorOptions: { label: string; value: string }[]
  updateAuthors: (changedItem: string) => void
  getAuthorById: (id: string) => IAuthor | undefined
  authorIsLoading: boolean
}
