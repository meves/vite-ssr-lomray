import { getViewer } from "@entities/Viewer"
// import { JsonViewer } from "@shared/ui"
import { useEffect, useState } from "react"

export const ViewerCSR = () => {
  const [data, setData] = useState({})

  if (typeof window === 'undefined') {
    const navStart = new Date().getTime()
    console.log('navStart: ', navStart);

    console.log('я на сервере')
    
  }
  
  useEffect(() => {
    const navStart = performance.getEntriesByType('navigation')[0].startTime
  
    getViewer().then(data => {
      setData(data)
      const total = performance.now() - navStart

      console.log(`[CSR] От навигации до данных: ${total}ms ${new Date().getTime()}`)
    })
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