import { useLazyQuery } from '@apollo/react-hooks'
import React from 'react'
import useAlert from '../useAlert'
import { withArray, withNull } from 'exp-value'
import useToken from '../useToken'

const useGraphqlQuery = (query, options = {}) => {
  const { showError, showWarning } = useAlert()
  const [isComplete, setComplete] = React.useState(false)
  const { clearToken } = useToken()

  const [lazy, { data, loading, error }] = useLazyQuery(query, {
    onCompleted: () => setComplete(true),
    errorPolicy: 'all'
  })

  React.useEffect(() => {
    const errors = withArray('graphQLErrors', error)
    const message = withNull('message', errors[0])
    const extensions = withNull('extensions', errors[0])
    if (extensions?.code == '401') {
      showWarning(
        'Phiên đăng nhập bị hết hạn. Vui lòng đăng nhập lại',
        60000,
        () => {
          clearToken()
        }
      )
    } else if (message == 'ActiveSupport::MessageVerifier::InvalidSignature')
      showError('Phiên đăng nhập bị hết hạn.', withNull('callback', options))
    else if (message) showError(message, withNull('callback', options))
  }, [error])

  return {
    query: lazy,
    isLoading: loading,
    isComplete: isComplete,
    error: error,
    data: data
  }
}

export default useGraphqlQuery
