import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

const PublicRoute = ({ component: Component, ...others }) => {
  return (
    <Route
      {...others}
      render={props => {
        return <Component {...props} {...others} />
      }}
    />
  )
}

PublicRoute.propTypes = {
  component: PropTypes.any
}

export default React.memo(PublicRoute)
