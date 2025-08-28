import { TbArrowsSort } from 'react-icons/tb'
import { DropdownText } from '@/components/DropdownText/DropdownText'
import styles from './FeedSort.module.scss'
import { usePosts } from '@/pages/Feed/hooks/usePosts'
import { POSTS_SORT_OPTIONS } from '@/constants/post'

export function FeedSort() {
  const { sortTypeLabel, sortType, updateSortType } = usePosts()

  return (
    <DropdownText
      classNames={{ text: styles.sort, panel: styles.sortPanel }}
      valueLabel={sortTypeLabel}
      options={POSTS_SORT_OPTIONS}
      onChange={updateSortType}
      Icon={TbArrowsSort}
      value={sortType}
    >
      Sort by:
    </DropdownText>
  )
}
