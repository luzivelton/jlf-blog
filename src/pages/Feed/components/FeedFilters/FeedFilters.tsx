import { DropdownButton } from '@/components/DropdownButton/DropdownButton'
import { useFilters } from '@/pages/Feed/hooks/useFilters'
import { useMemo } from 'react'
import styles from './FeedFilters.module.scss'
import { RadioGroup } from '@/components/RadioGroup/RadioGroup'
import type { DropdownButtonProps } from '@/components/DropdownButton/DropdownButtonInterfaces'

export function FeedFilters() {}

FeedFilters.Inline = function FeedFiltersInline() {
  return (
    <div className={styles.inline}>
      <CategoryFilter variant='inline' />
      <AuthorFilter variant='inline' />
    </div>
  )
}

FeedFilters.Panel = function FeedFiltersPanel() {
  return (
    <div className={styles.panel}>
      <CategoryFilter variant='panel' />
      <AuthorFilter variant='panel' />
    </div>
  )
}

type FilterElementProps = {
  variant: 'panel' | 'inline'
}

function AuthorFilter({ variant }: FilterElementProps) {
  const {
    authorOptions,
    selectedAuthors,
    updateAuthors,
    getAuthorById,
    authorIsLoading,
  } = useFilters()

  const labelOfSelected = useMemo(
    () => getLabelOfSelected(selectedAuthors, getAuthorById),
    [selectedAuthors, getAuthorById]
  )

  return (
    <VariantFilter
      variant={variant}
      label='Author'
      labelOfSelected={labelOfSelected}
      onChange={updateAuthors}
      options={authorOptions}
      value={selectedAuthors}
      multiple={true}
      loading={authorIsLoading}
    />
  )
}

function VariantFilter<T, M extends boolean | undefined>({
  variant,
  ...props
}: FilterElementProps & DropdownButtonProps<T, M>) {
  return variant === 'inline' ? (
    <DropdownButton {...props} />
  ) : (
    <RadioGroup {...props} />
  )
}

function CategoryFilter({ variant }: FilterElementProps) {
  const {
    categoryOptions,
    selectedCategories,
    updateCategories,
    getCategoryById,
    categoryIsLoading,
  } = useFilters()

  const labelOfSelected = useMemo(
    () => getLabelOfSelected(selectedCategories, getCategoryById),
    [selectedCategories, getCategoryById]
  )

  return (
    <VariantFilter
      variant={variant}
      label='Category'
      labelOfSelected={labelOfSelected}
      onChange={updateCategories}
      options={categoryOptions}
      value={selectedCategories}
      multiple={true}
      loading={categoryIsLoading}
    />
  )
}

function getLabelOfSelected<T extends { name: string }>(
  selectedCategories: string[],
  getCategoryById: (id: string) => T | undefined
) {
  return selectedCategories.map((id) => getCategoryById(id)?.name).join(', ')
}
