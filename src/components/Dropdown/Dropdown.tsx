import styles from './Dropdown.module.scss'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { Menu } from '@/components/Menu/Menu'
import { Typography } from '@/components/Typography/Typography'
import { createPortal } from 'react-dom'
import type {
  DropdownProps,
  PanelProps,
} from '@/components/Dropdown/DropdownInterfaces'

export function Dropdown<T>({
  container,
  children,
  valueIndex,
  onChange,
  position = 'left',
  classNames,
  className,
  ...props
}: DropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = React.useRef<HTMLDivElement | null>(null)
  const panelRef = React.useRef<HTMLDivElement | null>(null)

  function handleToggle() {
    setIsOpen((prev) => !prev)
  }

  function handleChange(valueIndex: number) {
    setIsOpen(false)
    onChange(valueIndex)
  }

  useEffect(() => {
    const containsTarget = (target: Node, element: HTMLElement | null) =>
      element && element.contains(target)

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      const isClickOutside =
        !containsTarget(target, triggerRef.current) &&
        !containsTarget(target, panelRef.current)

      if (isClickOutside) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className={clsx(className)}>
      <div
        className={clsx(styles.trigger, classNames?.trigger)}
        onClick={handleToggle}
        ref={triggerRef}
      >
        {children}
      </div>
      <Portal container={container || triggerRef.current}>
        <Panel
          {...props}
          className={classNames?.panel}
          ref={panelRef}
          isOpen={isOpen}
          handleChange={handleChange}
          position={position}
        />
      </Portal>
    </div>
  )
}

function Panel<T>({
  options,
  className,
  isOpen,
  handleChange,
  position = 'left',
  ...props
}: PanelProps<T>) {
  const hasOptions = options && options[0]

  return (
    isOpen && (
      <Menu
        className={clsx(
          styles.panel,
          {
            [styles.left]: position === 'left',
            [styles.right]: position === 'right',
          },
          className
        )}
        {...props}
      >
        {hasOptions ? (
          options.map((option, index) => (
            <Menu.Item key={option.label}>
              <button onClick={() => handleChange(index)}>
                <Typography variant='body' strong={true}>
                  {option.label}
                </Typography>
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
