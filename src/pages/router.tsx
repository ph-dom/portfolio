import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Loader from '../shared/loader/loader.component'
import Layout from '../shared/layout/layout.component'
import Articulos from './articulos/articles.component'
import Lectura from './articulos/lectura/lectura.component'
import Curriculum from './curriculum/curriculum.component'
import Editor from './editor/editor.component'
import Home from './home/home.component'
import Login from './login/login.component'
import NotFound from './not-found/not-found.component'

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/cv',
        element: <Curriculum />
      },
      {
        path: '/editor',
        element: <Editor />
      },
      {
        path: '/articulos',
        element: <Articulos />
      },
      {
        path: '/lectura/:titulo',
        element: <Lectura />
      }
    ]
  }
])

function Router (): JSX.Element {
  return (
    <RouterProvider router={browserRouter} fallbackElement={<Loader />}/>
  )
}

export default Router
