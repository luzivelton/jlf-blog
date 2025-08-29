import { Image } from '@/components/Image/Image'
import { Typography } from '@/components/Typography/Typography'
import { formatDate } from '@/utils/formatDate/formatDate'
import styles from './ArticleAuthorAndDate.module.scss'
import type { IPost } from '@/interfaces/IPost'
import { getLastName } from '@/utils/getLastName/getLastName'

type ContentProps = Pick<IPost, 'createdAt'> & {
  authorName: string
}

type DetailedProps = ContentProps & {
  authorImage: string
}

export function ArticleAuthorAndDate() {}

ArticleAuthorAndDate.Compact = function Compact({
  authorName,
  createdAt,
}: ContentProps) {
  return (
    <div>
      <Typography className={styles.compact} variant='caption' secondary={true}>
        <LastName aria-label='Written by' lastName={authorName} />
        <Date date={createdAt} />
      </Typography>
    </div>
  )
}
ArticleAuthorAndDate.Detailed = function Detailed({
  authorName,
  createdAt,
  authorImage,
}: DetailedProps) {
  return (
    <div className={styles.detailed}>
      <Image src={authorImage} avatar={true} />
      <div className={styles.textContent}>
        <Typography variant='caption'>
          Written by: <LastName lastName={authorName} />
        </Typography>
        <Typography variant='caption' secondary={true}>
          <Date date={createdAt} />
        </Typography>
      </div>
    </div>
  )
}

interface DateProps {
  date: string
}

function Date({ date }: DateProps) {
  return <time dateTime={date}>{formatDate(date, 'short')}</time>
}

interface LastNameProps {
  lastName: string
}

function LastName({ lastName }: LastNameProps) {
  return <span>{getLastName(lastName)}</span>
}
