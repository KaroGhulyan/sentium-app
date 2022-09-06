import React from 'react'
import './index.css'
import 'antd/dist/antd.min.css'
import { Main } from './components/layouts/Main'
import Theme from './assets/styles/base/Theme'
import { UIConfigProvider } from './store/context/UIConfigProvider'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './components/layouts/AppRoutes'
import { QueryClient , QueryClientProvider} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient = new QueryClient()


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <UIConfigProvider>
        <Theme>
          <BrowserRouter>
            <Main>
              <AppRoutes />
            </Main>
          </BrowserRouter>
        </Theme>
      </UIConfigProvider>
    </QueryClientProvider>

  )
}

export default App
