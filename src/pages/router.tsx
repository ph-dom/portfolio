import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import LayoutPublic from '../shared/public/layout-public.component'
import Articulos from './articulos/articles.component'
import Lectura from './articulos/lectura/lectura.component'
import Curriculum from './curriculum/curriculum.component'
import Editor from './editor/editor.component'
import Home from './home/home.component'
import Login from './login/login.component'
import NotFound from './not-found/not-found.component'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPublic />,
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

export default router
