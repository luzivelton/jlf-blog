import { useCallback, useMemo, useState, type ReactNode } from 'react'
import type { IPost, IPostsContext } from '@/interfaces/IPost'
import { usePostsData } from '@/hooks/useDataHooks'
import { PostsContext } from '@/contexts/PostsContext'
import { sortPosts } from '@/pages/Feed/utils/sortPosts'
import { useSort } from '@/pages/Feed/hooks/useSort'

type PostsProviderProps = {
  children: ReactNode
}

export function PostsProvider({ children }: PostsProviderProps) {
  const { data: postsRaw, isLoading, error } = usePostsData()
  const { selectedSort } = useSort()
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([])

  const postsSorted = useMemo(() => {
    if (!postsRaw) return []

    const result = sortPosts(postsRaw, selectedSort)

    return result
  }, [postsRaw, selectedSort])

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

  const updateAuthors = useCallback<IPostsContext['updateAuthors']>(
    (newAuthorIds) => {
      setSelectedAuthors(newAuthorIds)
    },
    []
  )

  const value = useMemo<IPostsContext>(
    (): IPostsContext => ({
      posts: postsSorted,
      isLoading,
      error,
      getPostById,
      getPostsByAuthor,
      selectedAuthors,
      updateAuthors,
    }),
    [
      postsSorted,
      isLoading,
      getPostById,
      getPostsByAuthor,
      error,
      selectedAuthors,
      updateAuthors,
    ]
  )

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
}
