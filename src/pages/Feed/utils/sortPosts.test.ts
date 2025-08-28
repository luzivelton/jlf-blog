import { MOCK_POSTS } from '@/__mocks__/posts'
import { sortPosts } from './sortPosts'

describe('sortPosts', () => {
  it('sorts by date ascending', () => {
    const sorted = sortPosts(MOCK_POSTS, 'date_asc')
    expect(sorted.map((p) => p.id)).toEqual(['3', '1', '2'])
  })

  it('sorts by date descending', () => {
    const sorted = sortPosts(MOCK_POSTS, 'date_desc')
    expect(sorted.map((p) => p.id)).toEqual(['2', '1', '3'])
  })

  it('sorts by title ascending', () => {
    const sorted = sortPosts(MOCK_POSTS, 'title_asc')
    expect(sorted.map((p) => p.id)).toEqual(['2', '1', '3'])
  })

  it('sorts by title descending', () => {
    const sorted = sortPosts(MOCK_POSTS, 'title_desc')
    expect(sorted.map((p) => p.id)).toEqual(['3', '1', '2'])
  })

  it('returns original order for unknown sortType', () => {
    // @ts-expect-error testing invalid sortType
    const sorted = sortPosts(MOCK_POSTS, 'unknown')
    expect(sorted.map((p) => p.id)).toEqual(['1', '2', '3'])
  })
})
