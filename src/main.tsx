import React from 'react'
import ReactDOM from 'react-dom/client'
import * as Sentry from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'
import App from './App'
import { CounterProvider } from './contexts'
import './styles/index.css'

Sentry.init({
  dsn: 'https://df59a2e1823b4aa7a2521b20815b707a@o4504579118792704.ingest.sentry.io/4504579122593792',
  integrations: [new BrowserTracing()],
  release: 'vite@4.0.0',
  tracesSampleRate: 1.0
})


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </React.StrictMode>,
)
