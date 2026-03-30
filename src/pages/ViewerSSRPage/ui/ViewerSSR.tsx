//import { JsonViewer } from "@shared/ui"

import { useEffect } from "react"

type Props = {
  data: any
}

export const ViewerSSR = ({data}: Props) => {
  useEffect(() => {
    if (data._serverRenderStart) {
      const total = Date.now() - data._serverRenderStart
      console.log(`[SSR] Полное время сервер→клиент: ${total}ms`)
      performance.mark('ssr-hydrated')
    }
  }, [])

  return (
    <section>
      {Array.from({length: 15000}, (_, i) => i).map((value) => (
        <p key={value}>{value}</p>
      ))}
      {JSON.stringify(data)}
      {/* <JsonViewer
        enableClipboard={false}
        collapsed={1}
        src={data}
        theme='google'
      /> */}
    </section>
  )
}