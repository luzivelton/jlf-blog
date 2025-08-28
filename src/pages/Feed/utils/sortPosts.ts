import type { _sortType, IPost } from '@/interfaces/IPost'

export function sortPosts(posts: IPost[], sortType: _sortType): IPost[] {
  const postsCopy = [...posts]
  switch (sortType) {
    case 'date_asc':
      return postsCopy.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      )
    case 'date_desc':
      return postsCopy.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
    case 'title_asc':
      return postsCopy.sort((a, b) => a.title.localeCompare(b.title))
    case 'title_desc':
      return postsCopy.sort((a, b) => b.title.localeCompare(a.title))
    default:
      return postsCopy
  }
}
