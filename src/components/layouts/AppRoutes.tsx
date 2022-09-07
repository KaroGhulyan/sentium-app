import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Employees, Projects, Clients } from '../../pages'

const AppRoutes: React.FC = () => (
  <Routes>
    <>
      <Route path='/employees' element={<Employees />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contracts' element={<Clients />} />
      <Route path='*' element={<Navigate to='/employees' replace />} />
    </>
  </Routes>
)

export default AppRoutes
