import { useCallback, useMemo, useState, type ReactNode } from 'react'
import { useAuthorsData, useCategoriesData } from '@/hooks/useDataHooks'
import { FiltersContext } from '@/contexts/FiltersContext'
import type { IFiltersContext, ICategory } from '@/interfaces/IFilters'
import type { IAuthor } from '@/interfaces/IAuthor'

type FiltersProviderProps = {
  children: ReactNode
}

export function FiltersProvider({ children }: FiltersProviderProps) {
  const {
    selectedCategories,
    categoryOptions,
    updateCategories,
    getCategoryById,
    categoryIsLoading,
  } = useCategoryFilter()

  const {
    selectedAuthors,
    authorOptions,
    updateAuthors,
    getAuthorById,
    authorIsLoading,
  } = useAuthorFilter()

  const value = useMemo<IFiltersContext>(
    () => ({
      selectedCategories,
      categoryOptions,
      updateCategories,
      getCategoryById,
      categoryIsLoading,

      selectedAuthors,
      authorOptions,
      updateAuthors,
      getAuthorById,
      authorIsLoading,
    }),
    [
      selectedCategories,
      categoryOptions,
      updateCategories,
      getCategoryById,
      selectedAuthors,
      authorOptions,
      updateAuthors,
      getAuthorById,
      authorIsLoading,
      categoryIsLoading,
    ]
  )

  return (
    <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
  )
}

function useAuthorFilter() {
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([])
  const { data: authors, isLoading: authorIsLoading } = useAuthorsData()

  const authorsMap = useMemo(() => {
    const map = new Map<string, IAuthor>()
    authors?.forEach((author) => map.set(author.id, author))
    return map
  }, [authors])

  const getAuthorById = useCallback(
    (id: string) => authorsMap.get(id),
    [authorsMap]
  )

  const authorOptions = useMemo(
    () =>
      authors
        ? authors.map((author) => ({
            label: author.name,
            value: author.id,
          }))
        : [],
    [authors]
  )

  const updateAuthors = useCallback(
    (changedItem: string) => {
      const isAdding = !selectedAuthors.includes(changedItem)

      if (isAdding) {
        setSelectedAuthors((prev) => [...prev, changedItem])
      } else {
        setSelectedAuthors((prev) => prev.filter((id) => id !== changedItem))
      }
    },
    [selectedAuthors]
  )

  return {
    selectedAuthors,
    authorOptions,
    updateAuthors,
    getAuthorById,
    authorIsLoading,
  }
}

function useCategoryFilter() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const { data: categories, isLoading: categoryIsLoading } = useCategoriesData()

  const categoriesMap = useMemo(() => {
    const map = new Map<string, ICategory>()
    categories?.forEach((category) => map.set(category.id, category))
    return map
  }, [categories])

  const getCategoryById = useCallback(
    (id: string) => categoriesMap.get(id),
    [categoriesMap]
  )

  const categoryOptions = useMemo(
    () =>
      categories
        ? categories.map((category) => ({
            label: category.name,
            value: category.id,
          }))
        : [],
    [categories]
  )

  const updateCategories = useCallback(
    (changedItem: string) => {
      const isAdding = !selectedCategories.includes(changedItem)

      if (isAdding) {
        setSelectedCategories((prev) => [...prev, changedItem])
      } else {
        setSelectedCategories((prev) => prev.filter((id) => id !== changedItem))
      }
    },
    [selectedCategories]
  )

  return {
    selectedCategories,
    categoryOptions,
    updateCategories,
    getCategoryById,
    categoryIsLoading,
  }
}
