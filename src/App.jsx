import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom'

import RootRoutes from './features/root/RootRoutes'

const router = createBrowserRouter([
  {
    path: '*',
    element: <RootRoutes />
  }
], {
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
