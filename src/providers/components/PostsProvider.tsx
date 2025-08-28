import { useCallback, useMemo, useState, type ReactNode } from 'react'
import type { IPost, IPostsContext } from '@/interfaces/IPost'
import { usePostsData } from '@/hooks/useDataHooks'
import { PostsContext } from '@/contexts/PostsContext'
import { sortPosts } from '@/pages/Feed/utils/sortPosts'
import { POSTS_SORT_OPTIONS } from '@/constants/post'

type PostsProviderProps = {
  children: ReactNode
}

export function PostsProvider({ children }: PostsProviderProps) {
  const { data: postsRaw, isLoading, error } = usePostsData()
  const [sortTypeIndex, setSortTypeIndex] = useState(0)
  const sortType = POSTS_SORT_OPTIONS[sortTypeIndex]?.value
  const sortTypeLabel = POSTS_SORT_OPTIONS[sortTypeIndex]?.label || 'Unknown'

  const postsSorted = useMemo(() => {
    if (!postsRaw) return []

    const result = sortPosts(postsRaw, sortType)

    return result
  }, [postsRaw, sortType])

  const postsIdMap = useMemo(() => {
    const map = new Map<string, IPost>()
    postsRaw?.forEach((post) => map.set(post.id, post))
    return map
  }, [postsRaw])

  const postsAuthorMap = useMemo(() => {
    const map = new Map<string, IPost[]>()
    postsRaw?.forEach((post) => {
      if (!map.has(post.authorId)) {
        map.set(post.authorId, [])
      }
      map.get(post.authorId)?.push(post)
    })
    return map
  }, [postsRaw])

  const getPostById = useCallback(
    (id: string): IPost => {
      const targetMap = postsIdMap
      return targetMap.get(id) as IPost
    },
    [postsIdMap]
  )

  const getPostsByAuthor = useCallback(
    (authorId: string): IPost[] => {
      const targetMap = postsAuthorMap
      return targetMap.get(authorId) ?? []
    },
    [postsAuthorMap]
  )

  const updateSortType = useCallback<IPostsContext['updateSortType']>(
    (newSortType) => {
      const isValidIndex = POSTS_SORT_OPTIONS[newSortType] !== undefined

      if (!isValidIndex) return

      setSortTypeIndex(newSortType)
    },
    []
  )

  const value = useMemo<IPostsContext>(
    (): IPostsContext => ({
      posts: postsSorted ?? [],
      isLoading,
      error,
      getPostById,
      getPostsByAuthor,
      sortTypeLabel,
      updateSortType,
      sortType,
    }),
    [
      postsSorted,
      isLoading,
      getPostById,
      getPostsByAuthor,
      error,
      sortTypeLabel,
      updateSortType,
      sortType,
    ]
  )

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
}
