import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { CounterContextProvider } from './contexts/CounterContext.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterContextProvider>
      <RouterProvider router={router} />
    </CounterContextProvider>
  </React.StrictMode>,
)
