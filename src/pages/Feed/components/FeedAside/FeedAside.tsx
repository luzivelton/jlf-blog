import { Typography } from '@/components/Typography/Typography'
import { useIsMobile } from '@/hooks/useIsMobile'
import { FeedFilters } from '@/pages/Feed/components/FeedFilters/FeedFilters'
import { useFilters } from '@/pages/Feed/hooks/useFilters'
import { usePosts } from '@/pages/Feed/hooks/usePosts'

export function FeedAside() {
  const isMobile = useIsMobile()
  const { updatePosts, postsRaw } = usePosts()
  const {
    filterByAuthor,
    filterByCategory,
    selectedAuthors,
    selectedCategories,
  } = useFilters()

  function handleFilter() {
    if (postsRaw) {
      updatePosts(
        filterByAuthor(
          filterByCategory(postsRaw, selectedCategories),
          selectedAuthors
        )
      )
    }
  }

  if (isMobile) {
    return null
  }

  return (
    <aside>
      <Typography variant='h1' asVariant={true}>
        DWS Blog
      </Typography>
      <FeedFilters.Panel onChange={handleFilter} />
    </aside>
  )
}
