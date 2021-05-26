import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import Home from '../pages/main/home'
import Login from '../pages/admin/auth/login'
import Dashboard from '../pages/admin/dashboard/dashboard'


const AppRouter = (): any => {
  return (
    <Router>
      <Switch>
        <PublicRoute exact path='/login' component={Login} />
        <PublicRoute exact path='/' component={Home} />
        <PrivateRoute exact path="/admin"
                        component={Dashboard}
                    />
        <Redirect to="/"></Redirect>
        </Switch>
    </Router>
  )
}

export default AppRouter
