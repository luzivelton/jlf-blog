import { api } from '@/api/api'
import type { IPost } from '@/interfaces/IPost'
import type { IAuthor } from '@/interfaces/IAuthor'
import type { ICategory } from '@/interfaces/ICategories'
import { useQuery } from '@tanstack/react-query'

export function usePostsData() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: () => api.get<IPost[]>('posts').then((res) => res.data),
  })
}

export function useAuthorsData() {
  return useQuery({
    queryKey: ['authors'],
    queryFn: () => api.get<IAuthor[]>('authors').then((res) => res.data),
  })
}

export function useCategoriesData() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => api.get<ICategory[]>('categories').then((res) => res.data),
  })
}

export function useArticleData(id: string) {
  return useQuery({
    queryKey: ['post', id],
    queryFn: () => api.get<IPost>(`posts/${id}`).then((res) => res.data),
    enabled: !!id,
  })
}

export function useAuthorData(id: string) {
  return useQuery({
    queryKey: ['author', id],
    queryFn: () => api.get<IAuthor>(`authors/${id}`).then((res) => res.data),
    enabled: !!id,
  })
}

export function useCategoryData(id: string) {
  return useQuery({
    queryKey: ['category', id],
    queryFn: () =>
      api.get<ICategory>(`categories/${id}`).then((res) => res.data),
    enabled: !!id,
  })
}
