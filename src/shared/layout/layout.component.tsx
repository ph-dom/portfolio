import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { authSignOut } from '../../config/firebase'
import { UserContext } from '../../context/user/user.context'

function Layout (): JSX.Element {
  const user = React.useContext(UserContext)
  const handleClickSignOut = (): void => {
    authSignOut().then(() => {
      console.log('ok')
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <React.Fragment>
      <header>
        <h1>PH</h1>
        <nav>
          <NavLink to={'/'}>Inicio</NavLink>
          <NavLink to={'/cv'}>CV</NavLink>
          <NavLink to={'/articulos'}>Articulos</NavLink>
        </nav>
        {user !== null && <button type="button" onClick={handleClickSignOut}>Cerrar Sesión</button> }
        {user !== null && <h3>{user.displayName}</h3>}
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <h5>Footer</h5>
      </footer>
    </React.Fragment>
  )
}

export default Layout
