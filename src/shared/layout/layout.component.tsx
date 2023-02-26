import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { authSignOut } from '../../config/firebase'
import { UserContext } from '../../context/user/user.context'

function Layout (): JSX.Element {
  const user = React.useContext(UserContext)

  const [darkMode, setDarkMode] = React.useState<boolean>(() => {
    const theme = localStorage.getItem('theme')
    if (theme !== null) {
      document.documentElement.dataset.theme = theme
    }
    return theme === 'dark'
  })

  const handleClickSignOut = (): void => {
    authSignOut().then(() => {
      console.log('ok')
    }).catch(error => {
      console.log(error)
    })
  }

  const handleClickChangeTheme = (): void => {
    setDarkMode(state => {
      document.documentElement.dataset.theme = (!state) ? 'dark' : 'light'
      localStorage.setItem('theme', (!state) ? 'dark' : 'light')
      return !state
    })
  }

  return (
    <React.Fragment>
      <header>
        <h1>PH</h1>
        <nav>
          <ul>
            <li><NavLink to={'/'}>Inicio</NavLink></li>
            <li><NavLink to={'/cv'}>CV</NavLink></li>
            <li><NavLink to={'/articulos'}>Articulos</NavLink></li>
            <li><button type="button" onClick={handleClickChangeTheme}>{darkMode ? 'Dark' : 'Light'}</button></li>
            {user !== null && (<li><button type="button" onClick={handleClickSignOut}>Cerrar Sesión</button></li>)}
          </ul>
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

export default Layout
