import React from 'react'
import { useTranslation } from 'react-i18next'
import { Outlet, NavLink } from 'react-router-dom'
import { authSignOut } from '../../config/firebase'
import { UserContext } from '../../context/user/user.context'

function Layout (): JSX.Element {
  const user = React.useContext(UserContext)
  const { i18n } = useTranslation()

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

  const handleChangeLang = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    i18n.changeLanguage(event.target.value).then((t) => {
      console.log('done')
    }).catch(error => {
      console.log(error)
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
            <li>
              <select onChange={(event) => { handleChangeLang(event) }} value={i18n.language}>
                <option value="en">en</option>
                <option value="es">es</option>
              </select>
            </li>
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
