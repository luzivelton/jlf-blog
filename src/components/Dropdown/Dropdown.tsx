import styles from './Dropdown.module.scss'
import clsx from 'clsx'
import React, { useState } from 'react'
import { Menu } from '@/components/Menu/Menu'
import { createPortal } from 'react-dom'
import type {
  DropdownProps,
  PanelProps,
} from '@/components/Dropdown/DropdownInterfaces'
import { useDismissOnScroll } from '@/components/Dropdown/hooks/useDismissOnScroll'
import { useClickOutside } from '@/components/Dropdown/hooks/useClickOutside'

export function Dropdown<T>({
  container,
  children,
  onChange,
  position = 'left',
  classNames,
  className,
  ...props
}: DropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = React.useRef<HTMLDivElement | null>(null)
  const panelRef = React.useRef<HTMLDivElement | null>(null)

  const onDismiss = React.useCallback(() => {
    setIsOpen(false)
  }, [])

  function handleToggle() {
    setIsOpen((prev) => !prev)
  }

  function handleChange(valueIndex: number) {
    onDismiss()
    onChange(valueIndex)
  }

  useDismissOnScroll({ onDismiss, isOpen, panelRef })
  useClickOutside({
    isOpen,
    onDismiss,
    panelRef,
    triggerRef,
  })

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
  value,
  ...props
}: PanelProps<T>) {
  const hasOptions = options && options[0]

  return (
    isOpen && (
      <Menu
        role='listbox'
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
          options.map((option, index) => {
            return (
              <Menu.Item
                key={option.label}
                onClick={() => handleChange(index)}
                selected={value === option.value}
                value={index}
              >
                {option.label}
              </Menu.Item>
            )
          })
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
