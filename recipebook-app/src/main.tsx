import React from 'react'
import ReactDOM from 'react-dom/client'

//styles
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'

//React Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

//React Router
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ErrorPage from './ErrorPage.tsx'
import DefaultLayout from './DefaultLayout.tsx'

import Root from './routes/Root.tsx'
import Form from './routes/Form.tsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<DefaultLayout />}>
    <Route path='/' element={<Root />} loader={Root.getLoader(queryClient)} errorElement={<ErrorPage />}></Route>
    <Route path='/Form' element={<Form />} errorElement={<ErrorPage />}></Route>
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
