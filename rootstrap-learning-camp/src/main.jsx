import React from 'react'
import ReactDOM from 'react-dom/client'

import { CounterContextProvider } from './contexts/CounterContext.jsx'
import { ClaseOnceContextProvider } from './components/clase-once/ClaseOnceContext.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterContextProvider>
      <ClaseOnceContextProvider >
        <RouterProvider router={router} />
      </ClaseOnceContextProvider>
    </CounterContextProvider>
  </React.StrictMode>,
)
