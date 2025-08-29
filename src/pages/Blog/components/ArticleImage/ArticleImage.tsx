import { Image } from '@/components/Image/Image'
import type { ImageProps } from '@/components/Image/ImageInterfaces'
import clsx from 'clsx'
import styles from './ArticleImage.module.scss'

type ArticleProps = Omit<ImageProps, 'className'> & {
  classNames?: {
    container?: string
    image?: string
  }
}

export function ArticleImage({ classNames, ...props }: ArticleProps) {
  return (
    <div className={clsx(styles.container, classNames?.container)}>
      <Image
        className={clsx(styles.image, classNames?.image)}
        alt='Article image'
        {...props}
      />
    </div>
  )
}
