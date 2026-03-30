import { Link } from '@shared/ui'
import { useEffect } from 'react'

import styles from './Homepage.module.css'

export default function HomePage() {
  if (typeof window === 'undefined') {
    console.log('HomePage рендерится на сервере (SSR)')
  } else {
    console.log('HomePage рендерится на клиенте (SPA)')
  }
  
  useEffect(() => {
    const width = window.innerWidth

    console.log(width);
  }, [])

  return (
    <section>
      Home page

      <nav className={styles.navigation}>
        <Link href="/feed">Feed</Link>
        <Link href="/ssr">SSR</Link>
        <Link href="/post">Post</Link>
        <Link href="/viewer-ssr">Viewer SSR</Link>
        <Link href="/viewer-csr">Viewer CSR</Link>
      </nav>
    </section>
  )
}