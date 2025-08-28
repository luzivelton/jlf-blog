import { Image } from '@/components/Image/Image'
import type { ImageProps } from '@/components/Image/ImageInterfaces'
import clsx from 'clsx'
import styles from './ArticleImage.module.scss'

type ArticleProps = ImageProps

export function ArticleImage({ className, ...props }: ArticleProps) {
  return (
    <Image
      className={clsx(styles.image, className)}
      alt='Article image'
      {...props}
    />
  )
}
