import { useState } from 'react'
import { TbArrowsSort } from 'react-icons/tb'
import { DropdownText } from '@/components/DropdownText/DropdownText'
import styles from './FeedSort.module.scss'

export function FeedSort() {
  const [sortBy, setSortBy] = useState(0)

  const { label } = SORT_OPTIONS[sortBy] ?? SORT_OPTIONS[0]

  function handleChange(valueIndex: number) {
    setSortBy(valueIndex)
  }

  return (
    <DropdownText
      classNames={{ text: styles.sort, panel: styles.sortPanel }}
      valueIndex={sortBy}
      valueLabel={label}
      options={SORT_OPTIONS}
      onChange={handleChange}
      Icon={TbArrowsSort}
    >
      Sort by:
    </DropdownText>
  )
}

const SORT_OPTIONS = [
  { label: 'Newest First', value: 'newest' },
  { label: 'Oldest First', value: 'oldest' },
]
