import type {
  _variant,
  TypographyElement,
  TypographyElementProps,
  TypographyProps,
} from '@/components/Typography/TypographyTypes'
import styles from './Typography.module.scss'
import clsx from 'clsx'

export function Typography({
  variant,
  strong,
  secondary,
  className,
  ...props
}: TypographyProps) {
  const VariantComponent = VARIANT_COMPONENT[variant]
  const variantStyle = VARIANT_STYLES[variant]

  return (
    <VariantComponent
      className={clsx(
        variantStyle,
        { [styles.strong]: strong },
        { [styles.secondary]: secondary },
        className
      )}
      variant={variant}
      {...props}
    />
  )
}

function Body({ className, ...props }: TypographyElementProps) {
  return <div className={clsx(styles.body, className)} {...props} />
}

function Title({ variant, className, ...props }: TypographyElementProps) {
  const classNameFinal = clsx(styles.title, className)

  switch (variant) {
    case 'h1':
      return <h1 className={classNameFinal} {...props} />
    case 'h2':
      return <h2 className={classNameFinal} {...props} />
    case 'h3':
      return <h3 className={classNameFinal} {...props} />
  }
}

const VARIANT_COMPONENT: Record<
  _variant,
  TypographyElement<TypographyElementProps>
> = {
  bodySmall: Body,
  bodyLarge: Body,
  body: Body,
  caption: Body,
  h1: Title,
  h2: Title,
  h3: Title,
}

const VARIANT_STYLES = {
  bodySmall: styles.bodySmall,
  bodyLarge: styles.bodyLarge,
  body: styles.bodyDefault,
  caption: styles.caption,
  h1: styles.h1,
  h2: styles.h2,
  h3: styles.h3,
}
