import type { DropdownButtonProps } from '@/components/DropdownButton/DropdownButtonInterfaces'
import { Loading } from '@/components/Loading/Loading'
import { Menu } from '@/components/Menu/Menu'
import { Typography } from '@/components/Typography/Typography'
import clsx from 'clsx'

type RadioGroupProps<T, M extends boolean | undefined> = DropdownButtonProps<
  T,
  M
>

export function RadioGroup<T, M extends boolean | undefined>({
  options,
  className,
  onChange,
  position = 'left',
  value,
  label,
  loading,
  ...props
}: RadioGroupProps<T, M>) {
  const hasOptions = options && options[0]

  function handleChange(value: T) {
    onChange(value)
  }

  return (
    <div>
      <Typography variant='caption'>{label}</Typography>
      {loading ? (
        <Loading />
      ) : (
        <Menu role='listbox' className={clsx(className)} {...props}>
          {hasOptions ? (
            options.map((option) => {
              const selected = Array.isArray(value)
                ? value.includes(option.value)
                : value === option.value

              return (
                <PanelItem
                  key={option.label}
                  option={option}
                  selected={selected}
                  handleChange={handleChange}
                />
              )
            })
          ) : (
            <Menu.Empty />
          )}
        </Menu>
      )}
    </div>
  )
}

function PanelItem<T>({
  option,
  selected,
  handleChange,
}: {
  option: { label: string; value: T }
  selected: boolean
  handleChange: (value: T) => void
}) {
  return (
    <Menu.Item
      key={option.label}
      onClick={() => handleChange(option.value)}
      selected={selected}
      value={option.value}
    >
      {option.label}
    </Menu.Item>
  )
}
