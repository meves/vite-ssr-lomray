import { getViewer } from "@entities/Viewer"
import { JsonViewer } from "@shared/ui"
import { useEffect, useState } from "react"

export const ViewerCSR = () => {
  const [data, setData] = useState({})

  let startNav = 0
  if (typeof window === 'undefined') {
    startNav = new Date().getTime()
    console.log('я на сервере start: ', startNav);    
  }

  useEffect(() => {
    
    getViewer().then(data => {
      setData(data)
      const navStart = performance.getEntriesByType('navigation')[0].startTime
      console.log(`[CSR] От навигации до данных: ${performance.now() - navStart}ms}`)
    })
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