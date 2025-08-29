import { DropdownButton } from '@/components/DropdownButton/DropdownButton'
import { useFilters } from '@/pages/Feed/hooks/useFilters'
import { useMemo } from 'react'
import styles from './FeedFilters.module.scss'
import { RadioGroup } from '@/components/RadioGroup/RadioGroup'
import type { DropdownButtonProps } from '@/components/DropdownButton/DropdownButtonInterfaces'
import { Typography } from '@/components/Typography/Typography'
import { MdTune } from 'react-icons/md'
import { Button } from '@/components/Button/Button'
import type { IFilterEvent } from '@/interfaces/IFilters'

type FeedFiltersProps = {
  onChange: (filter?: IFilterEvent) => void
}

export function FeedFilters() {}

FeedFilters.Inline = function FeedFiltersInline({
  onChange,
}: FeedFiltersProps) {
  return (
    <div className={styles.inline}>
      <CategoryFilter variant='inline' onChange={onChange} />
      <AuthorFilter variant='inline' onChange={onChange} />
    </div>
  )
}

FeedFilters.Panel = function FeedFiltersPanel({ onChange }: FeedFiltersProps) {
  return (
    <div className={styles.panel}>
      <header className={styles.header}>
        <MdTune />
        <Typography variant='h3' asVariant={true}>
          Filters
        </Typography>
      </header>
      <CategoryFilter variant='panel' />
      <AuthorFilter variant='panel' />
      <Button className={styles.apply} onClick={() => onChange()}>
        Apply filters
      </Button>
    </div>
  )
}

type FilterElementProps = {
  variant: 'panel' | 'inline'
}

function AuthorFilter({
  variant,
  onChange,
}: FilterElementProps & Partial<FeedFiltersProps>) {
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

  function handleChange(value: string) {
    const props = updateAuthors(value)

    if (onChange) {
      onChange(props)
    }
  }

  return (
    <VariantFilter
      variant={variant}
      label='Author'
      labelOfSelected={labelOfSelected}
      onChange={handleChange}
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

function CategoryFilter({
  variant,
  onChange,
}: FilterElementProps & Partial<FeedFiltersProps>) {
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

  function handleChange(value: string) {
    const props = updateCategories(value)

    if (onChange) {
      onChange(props)
    }
  }

  return (
    <VariantFilter
      variant={variant}
      label='Category'
      labelOfSelected={labelOfSelected}
      onChange={handleChange}
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
