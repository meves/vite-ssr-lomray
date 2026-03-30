import { Link } from '@shared/ui'
import { useEffect } from 'react'

export default function FeedPage() {
  if (typeof window === 'undefined') {
    console.log('FeedPage рендерится на сервере (SSR)')
  } else {
    console.log('FeedPage рендерится на клиенте (SPA)')
  }
  
  useEffect(() => {
    const width = window.innerWidth

    console.log(width);
  }, [])

  return (
    <section>
      Feed page

      <nav>
        <Link href="/">Home</Link>
      </nav>
    </section>
  )
}