import React from 'react'
import type { ISortContext } from '@/interfaces/ISort'
import { DEFAULT_POSTS_SORT_OPTION } from '@/constants/post'

const INITIAL_STATE: ISortContext = {
  selectedSort: DEFAULT_POSTS_SORT_OPTION.value,
  sortOptions: [],
  updateSort: () => {},
  getSortById: () => undefined,
}

export const SortContext = React.createContext<ISortContext>(INITIAL_STATE)
