import { Image } from '@/components/Image/Image'
import { Typography } from '@/components/Typography/Typography'
import { formatDate } from '@/utils/formatDate/formatDate'
import styles from './ArticleAuthorAndDate.module.scss'

type ArticleAuthorAndDateProps = React.HTMLAttributes<HTMLDivElement> & {
  variant: 'compact' | 'detailed'
}

export function ArticleAuthorAndDate({ variant }: ArticleAuthorAndDateProps) {
  if (variant === 'detailed') {
    return <Detailed />
  }

  return <Compact />
}
function Compact() {
  return (
    <div>
      <Typography
        className={styles.compactAuthorAndDate}
        variant='caption'
        secondary={true}
      >
        <LastName aria-label='Written by' lastName='Doe' />
        <Date date='2023-10-01' />
      </Typography>
    </div>
  )
}
function Detailed() {
  return (
    <div>
      <Image src='/images/avatars/avatar.png' avatar={true} />
      <div>
        <Typography variant='body'>
          Written by: <LastName lastName='Doe' />
        </Typography>
        <Typography variant='body' secondary={true}>
          <Date date='2023-10-01' />
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
  return <span>{lastName}</span>
}
