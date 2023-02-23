import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Router from './pages/router'
import './config/firebase'
import UserProvider from './context/user/user.context'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <UserProvider>
      <Router />
    </UserProvider>
  </React.StrictMode>
)
