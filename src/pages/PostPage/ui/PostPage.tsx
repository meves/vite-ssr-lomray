import { Link } from '@shared/ui'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router'
import { PostOnlyClient } from './PostOnlyClient'

export default function PostPage() {
  const data = useLoaderData()

  if (typeof window === 'undefined') {
    console.log('PostPage рендерится на сервере (SSR)')
  } else {
    console.log('PostPage рендерится на клиенте (SPA)')
  }
  
  useEffect(() => {
    const width = window.innerWidth

    console.log(width);
    
  }, [])

  return (
    <section>
      Post page

      <nav>
        <Link href="/">Home</Link>
      </nav>

      <p>Данные с сервера: {data}</p>

      <PostOnlyClient/>
    </section>
  )
}