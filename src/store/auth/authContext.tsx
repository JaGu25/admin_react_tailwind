import React, { useReducer } from 'react'
import AuthReducer from './authReducer'
import { types } from '../types'
import { logInService } from './../../services/api/auth'
import axios from "../../config/axios";

interface Props {
  children: React.ReactNode
}

const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') ?? '{}') : null

const initialState = {
  user: user ?? null,
  isLogged: false,
  checking: true
}

interface IAuth {
  user: any
  logOut: () => void,
  logIn: (email: string, password: string) => void,
  checkingToken: () => void,
  isLogged: Boolean,
  checking: Boolean
}

export const AuthContext = React.createContext<IAuth>({
  user: initialState,
  logOut: () => { },
  logIn: () => { },
  checkingToken: () => { },
  isLogged: false,
  checking: true
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

  const checkingToken = (): any => {
    return new Promise(async (resolve, reject): Promise<any> => {
      try {
        const res = await axios().get('/refresh');
        dispatch({
          type: types.AUTH_LOGIN,
          payload: res.data.data
        })
        localStorage.setItem('user', JSON.stringify(res.data.data))
      } catch (error) {
        dispatch({
          type: types.AUTH_NOT_AUTHORIZED,
        })
      }
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
        isLogged: state.isLogged,
        checking: state.checking,
        logIn,
        checkingToken,
        logOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default UserProvider
