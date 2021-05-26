import React, { useReducer } from 'react'
import AuthReducer from './authReducer'
import { types } from '../types'
import { logInService } from './../../services/api/auth'

interface Props {
  children: React.ReactNode
}

const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') ?? '{}') : null

const initialState = {
  user: user ?? null,
  isLogged: false
}

interface IAuth {
  user: any
  logOut: () => void,
  logIn: (email: string, password: string) => void,
  isLogged: Boolean
}

export const AuthContext = React.createContext<IAuth>({
  user: initialState,
  logOut: () => { },
  logIn: () => { },
  isLogged: false
})

const UserProvider = ({ children }: Props): any => {

  const [state, dispatch] = useReducer(AuthReducer, initialState)

  const logIn = (email: string, password: string): any => {
    return new Promise((resolve, reject): void => {
      logInService(email, password)
        .then((data) => {
          dispatch({
            type: types.AUTH_LOGIN,
            payload: data
          })
          localStorage.setItem('user', JSON.stringify(data))
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  const logOut = (): void => {
    dispatch({
      type: types.AUTH_LOGOUT
    })
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        logIn,
        logOut,
        isLogged: state.isLogged
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default UserProvider
