import { useIsMobile } from '@/hooks/useIsMobile'
import { FeedFilters } from '@/pages/Feed/components/FeedFilters/FeedFilters'
import { FeedSort } from '@/pages/Feed/components/FeedSort/FeedSort'
import styles from './FeedTopbar.module.scss'
import { usePosts } from '@/pages/Feed/hooks/usePosts'
import { useFilters } from '@/pages/Feed/hooks/useFilters'
import type { IFilterEvent } from '@/interfaces/IFilters'

export function FeedTopbar() {
  const isMobile = useIsMobile()

  const { updatePosts, postsRaw } = usePosts()
  const {
    filterByAuthor,
    filterByCategory,
    selectedAuthors,
    selectedCategories,
  } = useFilters()

  function handleFilter(props?: IFilterEvent) {
    if (postsRaw) {
      const { updatedCategories, updatedAuthors } = props || {}
      const categories = updatedCategories ?? selectedCategories
      const authors = updatedAuthors ?? selectedAuthors

      updatePosts(
        filterByAuthor(filterByCategory(postsRaw, categories), authors)
      )
    }
  }

  return (
    <div data-testid='feed-top-bar' className={styles.feedTopbar}>
      {isMobile && <FeedFilters.Inline onChange={handleFilter} />}
      <FeedSort />
    </div>
  )
}
