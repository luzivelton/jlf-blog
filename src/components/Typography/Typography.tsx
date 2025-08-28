import type {
  _variant,
  TypographyElement,
  TypographyElementProps,
  TypographyProps,
} from '@/components/Typography/TypographyTypes'
import styles from './Typography.module.scss'
import clsx from 'clsx'
import { useMemo } from 'react'

export function Typography({
  variant,
  strong,
  secondary,
  className,
  numberOfLines,
  style,
  ...props
}: TypographyProps) {
  const VariantComponent = VARIANT_COMPONENT[variant]
  const variantStyle = VARIANT_STYLES[variant]

  const styleFinal = useMemo(() => {
    if (!numberOfLines) return style

    return {
      ...style,
      '--line-number': numberOfLines,
    }
  }, [numberOfLines, style])

  return (
    <VariantComponent
      className={clsx(
        variantStyle,
        { [styles.strong]: strong },
        { [styles.secondary]: secondary },
        { [styles.ellipsis]: numberOfLines },
        className
      )}
      variant={variant}
      style={styleFinal}
      {...props}
    />
  )
}

function Body({ className, ...props }: TypographyElementProps) {
  return <div className={clsx(styles.body, className)} {...props} />
}

function Title({ variant, className, ...props }: TypographyElementProps) {
  const classNameFinal = clsx(styles.title, className)

  return <div className={classNameFinal} {...props} />
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
