import { useContext, useEffect } from 'react'
import { Redirect, Route } from 'react-router-dom'
import DashboardLayout from '../components/layouts/admin/DashboardLayout'
import { AuthContext } from '../store/auth/authContext'

const PrivateRoute = ({ component: Component, ...rest }: any): any => {

  const { isLogged, checking, checkingToken } = useContext(AuthContext)

  useEffect(() => {
    checkingToken();
  }, [])

  if (checking) {
    return <>
      <div className="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
        <span className="text-orange-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0">
          <i className="fas fa-circle-notch fa-spin fa-5x"></i>
        </span>
      </div>
      <DashboardLayout />
    </>;
  }

  return (
    <Route
      {...rest}
      component={(props: any) => (isLogged === true
        ? (<DashboardLayout >
          <Component {...props} />
        </DashboardLayout>)
        : (<Redirect to={'/login'} />)
      )}
    />
  )
}
export default PrivateRoute
