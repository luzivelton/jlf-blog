import type { IQueryEventValues } from '@/interfaces/ICustomEvents'

type LinkProps = {
  query: Record<string, string>
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export function Link({ query, ...props }: LinkProps) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    const url = new URL(window.location.href)

    for (const key in query) {
      url.searchParams.set(key, query[key])
    }

    if (e.ctrlKey) {
      ;(e.target as HTMLAnchorElement).href = url.toString()
      return
    }

    const detail: IQueryEventValues = { query }
    ;(e.target as HTMLAnchorElement).href = url.toString()
    e.preventDefault()

    window.dispatchEvent(new CustomEvent('query-change', { detail }))
    window.history.pushState({}, '', url)
  }

  return <a href={'#'} {...props} onClick={handleClick} />
}
