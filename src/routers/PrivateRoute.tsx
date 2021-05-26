import { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import DashboardLayout from '../components/layouts/DashboardLayout'
import { AuthContext } from '../store/auth/authContext'

const PrivateRoute = ({ component: Component, ...rest }: any): any => {
  const { isLogged } = useContext(AuthContext)

  return (
    <Route
      {...rest}
      component={(props: any) => ( isLogged === true
        ? (<DashboardLayout >
            <Component {...props} />
          </DashboardLayout>)
        : (<Redirect to={'/login'} />)
        )}
    />
  )
}
export default PrivateRoute
