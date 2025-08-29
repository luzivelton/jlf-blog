import React from 'react'
import type { IPost, IPostsContext } from '@/interfaces/IPost'

const INITIAL_STATE: IPostsContext = {
  posts: [],
  getPostById: () => ({}) as IPost,
  getPostsByAuthor: () => [],
  isLoading: false,
  error: null,
  selectedAuthors: [],
  updateAuthors: () => {},
}

export const PostsContext = React.createContext<IPostsContext>(INITIAL_STATE)
