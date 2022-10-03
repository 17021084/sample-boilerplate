import { Loading, PrivateRoute, PublicRoute } from 'atoms'
import { PropTypes } from 'prop-types'
import React, { lazy, Suspense } from 'react'
import { Switch, Redirect, useLocation } from 'react-router-dom'
import { PrivateTemplate, PublicTemplate } from 'templates'
import { Routers } from 'utils'

const AsyncLogin = lazy(() => import('pages/LoginPage'))
const AsyncForgot = lazy(() => import('pages/ForgotPassword'))
const AsyncReset = lazy(() => import('pages/ResetPassword'))
const AsyncDashboard = lazy(() => import('pages/DashboardPage'))
const AppointmentSchedule = lazy(() => import('pages/AppointmentSchedule'))
const CustomerPage = lazy(() => import('pages/CustomerPage'))
const OrderManagement = lazy(() => import('pages/OrderManagement'))
const NewsManagement = lazy(() =>
  import('pages/PostManagement/NewsManagementPage')
)
const NewsPage = lazy(() => import('pages/PostManagement/NewsPage'))
const VideoManagement = lazy(() =>
  import('pages/PostManagement/VideoManagementPage') 
)
const VideoPage = lazy(() => import('pages/PostManagement/VideoPage'))

const Routes = ({ isLoggedIn, ...rest }) => {
  const location = useLocation()
  const getArrayRoute = React.useMemo(() => {
    return Object.values(Routers)
      .toString()
      .replaceAll('[', '')
      .replaceAll(']', '')
      .split(',')
  }, [isLoggedIn])

  const isPrivateRouteAndNotLogin = React.useCallback(() => {
    // let validPrivateRoute =
    //   ['/sign-in', '/register', '/forgot-password', '/reset-password'].indexOf(
    //     location.pathname
    //   ) < 0

    // return (
    //   (!validPrivateRoute && isLoggedIn && (
    //     <Redirect to={Routers.NAV_LINK[6]} />
    //   )) ||
    //   (validPrivateRoute && !isLoggedIn && (
    //     <Redirect to={Routers.SIGN_IN_PAGE} />
    //   ))
    // )
    return false
  }, [isLoggedIn, location.pathname])

  const _handleBadRoute = React.useCallback(() => {
    return (
      isPrivateRouteAndNotLogin() ||
      (getArrayRoute.indexOf(location.pathname) < 0 &&
        (isLoggedIn ? (
          <Redirect to={Routers.DASHBOARD_PAGE} />
        ) : (
          <Redirect to={Routers.SIGN_IN_PAGE} />
        )))
    )
  }, [location, isLoggedIn])

  const _renderPrivateRoute = React.useCallback(
    () => (
      <PrivateTemplate>
        <PrivateRoute
          path={['/home', Routers.DASHBOARD_PAGE]}
          exact={true}
          component={AsyncDashboard}
          {...rest}
        />
        <PrivateRoute
          path={Routers.NAV_LINK[2]}
          exact={true}
          component={AppointmentSchedule}
          {...rest}
        />
        <PrivateRoute
          path={Routers.NAV_LINK[1]}
          exact={true}
          component={CustomerPage}
          {...rest}
        />
        <PrivateRoute
          path={Routers.NAV_LINK[3]}
          exact={true}
          component={OrderManagement}
          {...rest}
        />
        <PrivateRoute
          path={Routers.NAV_LINK[5]}
          exact={true}
          component={NewsManagement}
          {...rest}
        />
        <PrivateRoute
          path={Routers.NEWS}
          exact={true}
          component={NewsPage}
          {...rest}
        />
        <PrivateRoute
          path={Routers.NAV_LINK[6]}
          exact={true}
          component={VideoManagement}
          {...rest}
        />
        <PrivateRoute
          path={Routers.VIDEO}
          exact={true}
          component={VideoPage}
          {...rest}
        />
        {_handleBadRoute()}
      </PrivateTemplate>
    ),
    [isLoggedIn]
  )

  const _renderPublicRoute = React.useCallback(
    () => (
      <PublicTemplate>
        <PublicRoute
          path={Routers.FORGOT_PASSWORD_PAGE}
          exact={true}
          component={AsyncForgot}
          {...rest}
        />

        <PublicRoute
          path={['/', Routers.SIGN_IN_PAGE]}
          exact={true}
          component={AsyncLogin}
          {...rest}
        />

        <PublicRoute
          path={Routers.RESET_PASSWORD_PAGE}
          exact={true}
          component={AsyncReset}
          {...rest}
        />
        {_handleBadRoute()}
      </PublicTemplate>
    ),
    [isLoggedIn]
  )

  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        {isLoggedIn ? _renderPrivateRoute() : _renderPublicRoute()}
      </Switch>
    </Suspense>
  )
}

Routes.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired
}

PublicRoute.propTypes = {
  exact: PropTypes.any.isRequired
}

export default Routes
