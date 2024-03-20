import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
  createHashRouter
} from 'react-router-dom'

import Top from './features/top'
import Cpcp from './features/cpcp'

const router = createHashRouter([
  {
    path: '/',
    element: <Top />
  },
  {
    path: 'cpcp',
    element: <Cpcp />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
