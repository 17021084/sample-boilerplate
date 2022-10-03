import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

const PrivateRoute = ({ component: Component, ...others }) => {
  return (
    <Route
      {...others}
      render={props => {
        return <Component {...props} {...others} />
      }}
    />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.any
}

export default React.memo(PrivateRoute)
