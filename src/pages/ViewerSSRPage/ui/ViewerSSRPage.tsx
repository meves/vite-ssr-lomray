import { useLoaderData } from "react-router"
import { Link } from '@shared/ui'
import { ViewerSSR } from "./ViewerSSR";

export default function ViewerSSRPage() {
  const data = useLoaderData()

  if (typeof window === 'undefined') {
    console.log('Данные LessonViewerPage рендерятся на сервере');
    console.log(data);
  } else {
    console.log('Данные LessonViewerPage рендерятся на клиенте');
    console.log(data);
  }

  return (
    <section>
      <h2>Viewer SSR Page</h2>

      <Link href="/">Home</Link>

      <p>Status: {data.status}</p>

      <ViewerSSR
        data={data}
      />

    </section>
  )
}