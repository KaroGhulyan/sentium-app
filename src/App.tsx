import React from 'react'
import './index.css'
import 'antd/dist/antd.min.css'
import { Main } from './components/layouts/Main'
import Theme from './assets/styles/base/Theme'
import { UIConfigProvider } from './store/context/UIConfigProvider'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './components/layouts/AppRoutes'

function App() {
  return (
    <UIConfigProvider>
      <Theme>
        <BrowserRouter>
          <Main>
            <AppRoutes />
          </Main>
        </BrowserRouter>
      </Theme>
    </UIConfigProvider>
  )
}

export default App
