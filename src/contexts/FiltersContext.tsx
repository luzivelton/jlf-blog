import React from 'react'
import type { IFiltersContext } from '@/interfaces/IFilters'

const INITIAL_STATE: IFiltersContext = {
  selectedCategories: [],
  categoryOptions: [],
  updateCategories: () => {},
  getCategoryById: () => undefined,
  categoryIsLoading: false,

  authorOptions: [],
  selectedAuthors: [],
  updateAuthors: () => {},
  getAuthorById: () => undefined,
  authorIsLoading: false,
}

export const FiltersContext =
  React.createContext<IFiltersContext>(INITIAL_STATE)
