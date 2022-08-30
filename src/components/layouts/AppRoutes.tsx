import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Analytics, Briefings, Contracts, Growth } from '../../pages'

const AppRoutes: React.FC = () => (
  <Routes>
    <>
      <Route path='/analytics' element={<Analytics />} />
      <Route path='/briefings' element={<Briefings />} />
      <Route path='/contracts' element={<Contracts />} />
      <Route path='/growth' element={<Growth />} />
      <Route path='*' element={<Navigate to='/analytics' replace />} />
    </>
  </Routes>
)

export default AppRoutes
