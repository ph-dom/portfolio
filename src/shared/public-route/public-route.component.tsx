import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { UserContext } from '../../context/user/user.context'

function PublicRoute (): JSX.Element {
  const user = React.useContext(UserContext)
  return (
    (user === null) ? <Outlet /> : <Navigate to="/"/>
  )
}

export default PublicRoute
