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
import PrivateRoute from '../shared/private-route/private-route.component'
import PublicRoute from '../shared/public-route/public-route.component'

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        element: <PrivateRoute />,
        children: [
          {
            path: '/editor',
            element: <Editor />
          }
        ]
      },
      {
        element: <PublicRoute />,
        children: [
          {
            path: '/login',
            element: <Login />
          }
        ]
      },
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/cv',
        element: <Curriculum />
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
