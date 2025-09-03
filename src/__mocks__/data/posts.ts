import type { IPost } from '@/interfaces/IPost'
import { MOCK_CATEGORIES } from '@/__mocks__/data/category'

export const MOCK_POSTS: IPost[] = [
  {
    id: '1',
    title: 'Banana',
    content: '',
    thumbnail_url: '',
    authorId: 'a',
    createdAt: '2025-08-01T10:00:00.000Z',
    updatedAt: '2025-08-01T10:00:00.000Z',
    categories: [MOCK_CATEGORIES[0], MOCK_CATEGORIES[2]],
    author: {
      id: 'a',
      name: 'Author',
      profilePicture: '',
      createdAt: '',
      updatedAt: '',
    },
  },
  {
    id: '2',
    title: 'Apple',
    content: '',
    thumbnail_url: '',
    authorId: 'b',
    createdAt: '2025-08-03T10:00:00.000Z',
    updatedAt: '2025-08-03T10:00:00.000Z',
    categories: [MOCK_CATEGORIES[1], MOCK_CATEGORIES[4]],
    author: {
      id: 'b',
      name: 'Author',
      profilePicture: '',
      createdAt: '',
      updatedAt: '',
    },
  },
  {
    id: '3',
    title: 'Cherry',
    content: '',
    thumbnail_url: '',
    authorId: 'c',
    createdAt: '2025-07-30T10:00:00.000Z',
    updatedAt: '2025-07-30T10:00:00.000Z',
    categories: [MOCK_CATEGORIES[3]],
    author: {
      id: 'c',
      name: 'Author',
      profilePicture: '',
      createdAt: '',
      updatedAt: '',
    },
  },
]
