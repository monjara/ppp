import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Index from './components/Index'

function RootRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
    </Routes>
  )
}
export default RootRoutes
