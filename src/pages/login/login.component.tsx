import React from 'react'
import { authSignIn } from '../../config/firebase'

interface Credenciales {
  email: string
  password: string
}

function Login (): JSX.Element {
  const [credenciales, setCredenciales] = React.useState<Credenciales>({
    email: '',
    password: ''
  })

  const handleSubmitLogin = (): void => {
    authSignIn(credenciales.email, credenciales.password).then(userCredentials => {
      console.log(userCredentials)
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <React.Fragment>
      <form
        onSubmit={event => {
          event.preventDefault()
          handleSubmitLogin()
        }}
      >
        <div>
          <label htmlFor="email">Correo</label>
          <input type="email" id="email" required autoComplete="off"
            onChange={event => {
              setCredenciales(state => ({ ...state, email: event.target.value }))
            }}
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" required autoComplete="off"
            onChange={event => {
              setCredenciales(state => ({ ...state, password: event.target.value }))
            }}
          />
        </div>
        <div>
          <input type="submit" value="Iniciar Sesión" />
        </div>
      </form>
    </React.Fragment>
  )
}

export default Login
