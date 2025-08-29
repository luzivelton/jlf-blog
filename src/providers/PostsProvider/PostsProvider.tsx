import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
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
  const [posts, setPosts] = useState<IPost[]>(postsRaw ?? [])
  const { selectedSort } = useSort()

  const postsSorted = useMemo(() => {
    if (!posts) return []

    const result = sortPosts(posts, selectedSort)

    return result
  }, [posts, selectedSort])

  const postsIdMap = useMemo(() => {
    const map = new Map<string, IPost>()
    posts?.forEach((post) => map.set(post.id, post))
    return map
  }, [posts])

  const getPostById = useCallback(
    (id: string): IPost => {
      const targetMap = postsIdMap
      return targetMap.get(id) as IPost
    },
    [postsIdMap]
  )

  const updatePosts = useCallback((posts: IPost[]) => {
    setPosts(posts)
  }, [])

  useEffect(() => {
    if (postsRaw) {
      updatePosts(postsRaw)
    }
  }, [postsRaw, updatePosts])

  const value = useMemo<IPostsContext>(
    (): IPostsContext => ({
      posts: postsSorted,
      isLoading,
      error,
      getPostById,
      updatePosts,
      postsRaw,
    }),
    [postsSorted, isLoading, getPostById, error, updatePosts, postsRaw]
  )

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
}
