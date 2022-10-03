import { ApolloProvider } from '@apollo/client'
import Routes from 'config/routes'
import { createMemoryHistory } from 'history'
import { useClient, useToken, useResetPassword, useSmartPrototype } from 'hooks'
import { withNumber } from 'exp-value'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastProvider } from 'react-toast-notifications'
import 'rsuite/dist/styles/rsuite-default.css'

const App = props => {
  useSmartPrototype()

  const { token, isLoggedIn } = useToken()
  const { resetToken } = useResetPassword()
  const azToken = withNumber('length', token) > 0 ? token : resetToken
  const client = useClient(azToken)

  return (
    <ApolloProvider client={client}>
      <ToastProvider
        autoDismiss
        autoDismissTimeout={6000}
        placement='top-right'
      >
        <React.Fragment>
          <BrowserRouter history={createMemoryHistory}>
            <Routes {...props} isLoggedIn={isLoggedIn} />
          </BrowserRouter>
        </React.Fragment>
      </ToastProvider>
    </ApolloProvider>
  )
}

export default App
