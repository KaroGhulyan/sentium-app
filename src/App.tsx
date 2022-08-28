import React from 'react'
import './index.css'
import { Main } from './components/layouts/Main'
import Theme from './assets/styles/base/Theme'
import { UIConfigProvider } from './store/context/UIConfigProvider'

function App() {
  return (
    <UIConfigProvider>
      <Theme>
        <Main>
          <h1>Contenr</h1>
        </Main>
      </Theme>
    </UIConfigProvider>
  )
}

export default App
