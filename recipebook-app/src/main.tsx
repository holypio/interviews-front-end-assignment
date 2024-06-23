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
import { getOptions } from './API/queries.tsx'

export type DefaultLoaderValues = { cuisines: Cuisine[]; difficulties: Difficulty[]; diets: Diet[]; }
const router = createBrowserRouter(createRoutesFromElements(
  <Route id='default' element={<DefaultLayout />} loader={async (): Promise<DefaultLoaderValues> => {
    const data = {
      cuisines: await queryClient.ensureQueryData({ ...getOptions("cuisines"), staleTime: Infinity }) as Cuisine[],
      difficulties: await queryClient.ensureQueryData({ ...getOptions("difficulties"), staleTime: Infinity }) as Difficulty[],
      diets: await queryClient.ensureQueryData({ ...getOptions("diets"), staleTime: Infinity }) as Diet[]
    }
    return data

  }}>
    <Route path='/' element={<Root />} loader={Root.getLoader(queryClient)} errorElement={<ErrorPage />}></Route>
    <Route path='/Form' element={<Form />} errorElement={<ErrorPage />}></Route>
  </Route >
))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode >
)
