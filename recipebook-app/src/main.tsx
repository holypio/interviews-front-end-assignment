import React from 'react'
import ReactDOM from 'react-dom/client'

//styles
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'

//components
import Root from './routes/Root.tsx'
import Grid from './components/Grid.tsx'

//React Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

//React Router
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ErrorPage from './ErrorPage.tsx'
import DefaultLayout from './DefaultLayout.tsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<DefaultLayout />}>
    <Route path='/' element={<Root />} errorElement={<ErrorPage />}>
    </Route>
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode >
)
