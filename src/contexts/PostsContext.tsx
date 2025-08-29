import React from 'react'
import type { IPost, IPostsContext } from '@/interfaces/IPost'
import { DEFAULT_POSTS_SORT_OPTION } from '@/constants/post'

const INITIAL_STATE: IPostsContext = {
  posts: [],
  getPostById: () => ({}) as IPost,
  updateSortType: () => {},
  getPostsByAuthor: () => [],
  isLoading: false,
  error: null,
  sortType: DEFAULT_POSTS_SORT_OPTION.value,
  sortTypeLabel: DEFAULT_POSTS_SORT_OPTION.label,
  selectedAuthors: [],
  selectedCategories: [],
  updateAuthors: () => {},
  updateCategories: () => {},
}

export const PostsContext = React.createContext<IPostsContext>(INITIAL_STATE)
