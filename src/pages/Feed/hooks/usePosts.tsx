import { useContext } from 'react'
import { PostsContext } from '@/contexts/PostsContext'

export const usePosts = () => useContext(PostsContext)
