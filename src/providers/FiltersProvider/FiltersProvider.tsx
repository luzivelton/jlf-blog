import { useCallback, useMemo, useState, type ReactNode } from 'react'
import { useAuthorsData, useCategoriesData } from '@/hooks/useDataHooks'
import { FiltersContext } from '@/contexts/FiltersContext'
import type {
  IFiltersContext,
  ICategory,
  IFilterEvent,
} from '@/interfaces/IFilters'
import type { IAuthor } from '@/interfaces/IAuthor'
import { getLastName } from '@/utils/getLastName/getLastName'
import type { IPost } from '@/interfaces/IPost'

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
    filterByCategory,
  } = useCategoryFilter()

  const {
    selectedAuthors,
    authorOptions,
    updateAuthors,
    getAuthorById,
    authorIsLoading,
    filterByAuthor,
  } = useAuthorFilter()

  const value = useMemo<IFiltersContext>(
    () => ({
      selectedCategories,
      categoryOptions,
      updateCategories,
      getCategoryById,
      categoryIsLoading,
      filterByCategory,

      selectedAuthors,
      authorOptions,
      updateAuthors,
      getAuthorById,
      authorIsLoading,
      filterByAuthor,
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
      filterByAuthor,
      filterByCategory,
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
            label: getLastName(author.name),
            value: author.id,
          }))
        : [],
    [authors]
  )

  const updateAuthors = useCallback(
    (changedItem: string): IFilterEvent => {
      const isAdding = !selectedAuthors.includes(changedItem)

      if (isAdding) {
        setSelectedAuthors((prev) => addToList(prev, changedItem))

        return {
          updatedAuthors: addToList(selectedAuthors, changedItem),
        }
      } else {
        setSelectedAuthors((prev) => removeFromList(prev, changedItem))

        return {
          updatedAuthors: removeFromList(selectedAuthors, changedItem),
        }
      }
    },
    [selectedAuthors]
  )

  const filterByAuthor = useCallback(
    (posts: IPost[], selectedAuthors: string[]): IPost[] => {
      if (selectedAuthors.length === 0) return posts

      return posts.filter((post) => selectedAuthors.includes(post.authorId))
    },
    []
  )

  return {
    selectedAuthors,
    authorOptions,
    updateAuthors,
    getAuthorById,
    authorIsLoading,
    filterByAuthor,
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
    (changedItem: string): IFilterEvent => {
      const isAdding = !selectedCategories.includes(changedItem)

      if (isAdding) {
        setSelectedCategories((prev) => addToList(prev, changedItem))

        return {
          updatedCategories: addToList(selectedCategories, changedItem),
        }
      } else {
        setSelectedCategories((prev) => removeFromList(prev, changedItem))

        return {
          updatedCategories: removeFromList(selectedCategories, changedItem),
        }
      }
    },
    [selectedCategories]
  )

  const filterByCategory = useCallback(
    (posts: IPost[], selectedCategories: string[]): IPost[] => {
      if (selectedCategories.length === 0) return posts

      return posts.filter((post) =>
        post.categories.some((category) =>
          selectedCategories.includes(category.id)
        )
      )
    },
    []
  )

  return {
    selectedCategories,
    categoryOptions,
    updateCategories,
    getCategoryById,
    categoryIsLoading,
    filterByCategory,
  }
}

function addToList(list: string[], item: string) {
  return [...list, item]
}

function removeFromList(list: string[], item: string) {
  return list.filter((id) => id !== item)
}
