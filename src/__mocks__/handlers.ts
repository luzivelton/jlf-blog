import { MOCK_CATEGORIES } from '@/__mocks__/data/category'
import { MOCK_POSTS } from '@/__mocks__/data/posts'
import { API_URL } from '@/config/env'
import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get(`${API_URL}/categories`, () => {
    return HttpResponse.json(MOCK_CATEGORIES)
  }),
  http.get(`${API_URL}/posts`, () => {
    return HttpResponse.json(MOCK_POSTS)
  }),
]
