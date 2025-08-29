import React from 'react'
import type { IPost, IPostsContext } from '@/interfaces/IPost'

const INITIAL_STATE: IPostsContext = {
  posts: [],
  getPostById: () => ({}) as IPost,
  isLoading: false,
  error: null,
  updatePosts: () => {},
  postsRaw: undefined,
}

export const PostsContext = React.createContext<IPostsContext>(INITIAL_STATE)
