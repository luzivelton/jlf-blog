import { Input } from '@/components/Input/Input'
import { MdArrowBack, MdClose, MdSearch } from 'react-icons/md'
import styles from './Search.module.scss'
import clsx from 'clsx'
import React, { useCallback, useEffect, type RefObject } from 'react'
import { ButtonIcon } from '@/components/ButtonIcon/ButtonIcon'
import { Menu } from '@/components/Menu/Menu'
import { Typography } from '@/components/Typography/Typography'
import { createPortal } from 'react-dom'
import type { MenuProps } from '@/components/Menu/MenuInterfaces'

type ISearchOption = {
  title?: string
  description: string
  value: string
}

type SearchProps = Omit<React.ComponentProps<'input'>, 'onChange'> & {
  classNames?: {
    contentFocused?: string
  }
  onChange?: (query: string) => void
  options?: ISearchOption[]
  value?: string
  container?: RefObject<HTMLElement | null>
}

export function Search({
  className,
  classNames,
  onChange,
  value,
  options,
  container,
  ...rest
}: SearchProps) {
  const [isFocused, setIsFocused] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement>(null)

  function handleFocus() {
    setIsFocused(true)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  const focusInput = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  useEffect(() => {
    if (isFocused) {
      focusInput()
    }
  }, [isFocused, focusInput])

  function handleBack() {
    setIsFocused(false)
  }

  function handleClear(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation()
    if (inputRef.current) {
      inputRef.current.value = ''
      focusInput()
    }
    if (onChange) onChange('')
  }

  return (
    <div className={styles.container}>
      <div
        className={clsx(styles.content, className, {
          [classNames?.contentFocused || '']: isFocused,
        })}
      >
        {isFocused && (
          <ButtonIcon
            label='Close search'
            variant='transparent'
            onClick={handleBack}
          >
            <MdArrowBack />
          </ButtonIcon>
        )}
        <div className={styles.inputContainer} onClick={handleFocus}>
          {!isFocused ? (
            <ButtonIcon key='search' label='Search' className={styles.button}>
              <MdSearch />
            </ButtonIcon>
          ) : (
            <ButtonIcon
              key='clear'
              label='Clear'
              className={styles.button}
              onClick={handleClear}
              variant='transparent'
              secondary={true}
            >
              <MdClose />
            </ButtonIcon>
          )}
          <Input
            ref={inputRef}
            className={clsx(styles.input, {
              [styles.inputVisible]: isFocused,
            })}
            onChange={handleChange}
            {...rest}
          />
        </div>
      </div>
      <Portal container={container?.current}>
        <Dropdown
          value={value}
          isFocused={isFocused}
          options={options}
          style={
            container?.current
              ? {
                  height: `calc(100dvh - ${container?.current?.offsetHeight}px)`,
                }
              : undefined
          }
        />
      </Portal>
    </div>
  )
}

type DropdownProps = MenuProps & {
  value?: string
  isFocused: boolean
  options?: ISearchOption[]
}

function Dropdown({
  value,
  isFocused,
  options,
  className,
  ...props
}: DropdownProps) {
  return (
    value &&
    isFocused && (
      <Menu className={clsx(styles.dropdown, className)} {...props}>
        {options && options[0] ? (
          options.map((option) => (
            <Menu.Item key={option.value}>
              <button>
                {option.title && (
                  <Typography variant='body' strong={true}>
                    {option.title}
                  </Typography>
                )}
                <Typography variant='bodySmall'>
                  {option.description}
                </Typography>{' '}
              </button>
            </Menu.Item>
          ))
        ) : (
          <Menu.Empty />
        )}
      </Menu>
    )
  )
}

type PortalProps = {
  container: HTMLElement | null | undefined
  children: React.ReactNode
}

function Portal({ container, children }: PortalProps) {
  if (!container) return null

  return createPortal(children, container)
}
