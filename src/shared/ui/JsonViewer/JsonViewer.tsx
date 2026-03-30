import OnlyClient from "@lomray/vite-ssr-boost/components/only-client";
import { Fallback } from'@shared/ui'
import type { ThemeKeys } from "react-json-view";

type Props = {
  enableClipboard: boolean
  collapsed: number
  src: any
  theme: ThemeKeys
}

export function JsonViewer(props: Props) {
  return (
    <OnlyClient
      load={async () => {
        const mod = await import('react-json-view')
        return mod.default
      }}
      fallback={<Fallback/>}      
    >
      {(ReactJson) => <ReactJson {...props}/>}
    </OnlyClient>
  )
}