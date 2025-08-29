import React from 'react'
import type { IFilterEvent, IFiltersContext } from '@/interfaces/IFilters'

const INITIAL_STATE: IFiltersContext = {
  selectedCategories: [],
  categoryOptions: [],
  updateCategories: () => ({}) as unknown as IFilterEvent,
  getCategoryById: () => undefined,
  categoryIsLoading: false,

  authorOptions: [],
  selectedAuthors: [],
  updateAuthors: () => ({}) as unknown as IFilterEvent,
  getAuthorById: () => undefined,
  authorIsLoading: false,
  filterByAuthor: () => [],
  filterByCategory: () => [],
}

export const FiltersContext =
  React.createContext<IFiltersContext>(INITIAL_STATE)
