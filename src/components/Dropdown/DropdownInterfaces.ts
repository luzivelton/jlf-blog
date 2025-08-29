import type { MenuProps } from '@/components/Menu/MenuInterfaces'

export type DropdownOption<T> = {
  label: string
  value: T
}

export type CommonProps<T> = Omit<MenuProps, 'onChange'> & {
  options?: DropdownOption<T>[]
  position?: 'left' | 'right'
  value: T
}

export type DropdownProps<T> = CommonProps<T> & {
  options: DropdownOption<T>[]
  onChange: (valueIndex: number) => void
  container?: HTMLElement | null
  classNames?: {
    trigger?: string
    panel?: string
  }
}

export type PanelProps<T> = CommonProps<T> & {
  isOpen: boolean
  handleChange: (valueIndex: number) => void
}
