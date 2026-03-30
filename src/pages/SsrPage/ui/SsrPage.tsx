import { Link } from '@shared/ui'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router'

export default function SsrPage() {
  const data = useLoaderData()

  if (typeof window === 'undefined') {
    console.log('SsrPage рендерится на сервере (SSR)')
  } else {
    console.log('SsrPage рендерится на клиенте (SPA)')
  }
  
  useEffect(() => {
    const width = window.innerWidth

    console.log(width);
  }, [])

  return (
    <section>
      Ssr page

      <nav>
        <Link href="/">Home</Link>
      </nav>

      <p>Данные с сервера: {data}</p>
    </section>
  )
}