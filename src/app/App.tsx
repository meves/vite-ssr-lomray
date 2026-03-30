import './index.css'
import './App.css'
import { ErrorBoundary } from '@shared/ui'

type AppProps = {
  children?: React.ReactNode
}

function App({ children }: AppProps) {
  return (
    <ErrorBoundary>
      {children}
    </ErrorBoundary>
  )
}

export default App
