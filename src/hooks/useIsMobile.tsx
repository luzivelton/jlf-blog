import { useState, useEffect, useTransition } from 'react'

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window.innerWidth < MOBILE_BREAKPOINT
  )
  const [, startTransition] = useTransition()

  useEffect(() => {
    function handleResize() {
      startTransition(() => {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
      })
    }

    if (typeof window !== 'undefined') {
      handleResize()
      window.addEventListener('resize', handleResize)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return isMobile
}
