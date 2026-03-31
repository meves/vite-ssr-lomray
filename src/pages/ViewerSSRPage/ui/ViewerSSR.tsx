import { JsonViewer } from "@shared/ui"

import { useEffect } from "react"

type Props = {
  data: any
}

export const ViewerSSR = ({data}: Props) => {
  useEffect(() => {
    if (data._serverRenderStart) {
      console.log(`[SSR] Полное время сервер→клиент: ${Date.now() - data._serverRenderStart}ms`)
      performance.mark('ssr-hydrated')
    }
  }, [])

  return (
    <section>
      <JsonViewer
        enableClipboard={false}
        collapsed={1}
        src={data}
        theme='google'
      />
    </section>
  )
}