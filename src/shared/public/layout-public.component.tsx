import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

function LayoutPublic (): JSX.Element {
  return (
    <React.Fragment>
      <header>
        <h1>PH</h1>
        <nav>
          <NavLink to={'/'}>Inicio</NavLink>
          <NavLink to={'/cv'}>CV</NavLink>
          <NavLink to={'/articulos'}>Articulos</NavLink>
        </nav>
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

export default LayoutPublic
