import clsx from 'clsx'
import styles from './Button.module.scss'

type _variant = 'primary' | 'secondary'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: _variant
}

export function Button({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonProps) {
  const variantClass = VARIANT_CLASSES[variant]

  return (
    <button className={clsx(styles.button, variantClass, className)} {...props}>
      {children}
    </button>
  )
}

const VARIANT_CLASSES: Record<_variant, string> = {
  primary: styles.variantPrimary,
  secondary: styles.variantSecondary,
}
