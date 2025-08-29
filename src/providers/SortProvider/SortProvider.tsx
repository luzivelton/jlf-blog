import { DEFAULT_POSTS_SORT_OPTION, POSTS_SORT_OPTIONS } from '@/constants/post'
import { SortContext } from '@/contexts/SortContext'
import type { _sortType } from '@/interfaces/IPost'
import type { ISortContext } from '@/interfaces/ISort'
import React, { useCallback, useMemo, useState } from 'react'

type SortProviderProps = {
  children: React.ReactNode
}

export function SortProvider({ children }: SortProviderProps) {
  const [selectedSort, setSelectedSort] = useState<_sortType>(
    DEFAULT_POSTS_SORT_OPTION.value
  )

  const updateSort = useCallback<ISortContext['updateSort']>((newSortType) => {
    setSelectedSort(newSortType)
  }, [])

  const getSortById = useCallback<ISortContext['getSortById']>((value) => {
    return POSTS_SORT_OPTIONS.find((option) => option.value === value)
  }, [])

  const value = useMemo<ISortContext>(
    () => ({
      selectedSort,
      updateSort,
      sortOptions: POSTS_SORT_OPTIONS,
      getSortById,
    }),
    [selectedSort, updateSort, getSortById]
  )

  return <SortContext.Provider value={value}>{children}</SortContext.Provider>
}
