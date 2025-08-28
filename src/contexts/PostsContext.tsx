import React from 'react'
import type { IPost, IPostsContext } from '@/interfaces/IPost'
import { POSTS_SORT_OPTIONS } from '@/constants/post'

const INITIAL_STATE: IPostsContext = {
  posts: [],
  sortTypeLabel: POSTS_SORT_OPTIONS[0].label,
  sortType: POSTS_SORT_OPTIONS[0].value,
  getPostById: () => ({}) as IPost,
  updateSortType: () => {},
  getPostsByAuthor: () => [],
  isLoading: false,
  error: null,
}

export const PostsContext = React.createContext<IPostsContext>(INITIAL_STATE)
