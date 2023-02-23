import React, { type PropsWithChildren } from 'react'
import type { User } from 'firebase/auth'
import { onAuthChanged } from '../../config/firebase'
import Loader from '../../shared/loader/loader.component'

export const UserContext = React.createContext<User | null>(null)

export default function UserProvider (props: PropsWithChildren): JSX.Element {
  const [user, setUser] = React.useState<User | null>(null)
  const [loading, setLoading] = React.useState(true)

  const handleChangeUser = (user: User | null): void => {
    console.log('PASE POR AQUICHI', user)
    setUser(user)
    setLoading(false)
  }

  React.useEffect(() => {
    const unsubscribe = onAuthChanged(handleChangeUser)
    return () => {
      unsubscribe()
    }
  }, [user])

  return (
    <UserContext.Provider value={user}>
      {loading ? <Loader /> : props.children}
    </UserContext.Provider>
  )
}
