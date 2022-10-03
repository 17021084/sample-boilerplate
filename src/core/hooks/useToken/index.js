import { AppContext } from 'config/store/app_context'
import React from 'react'
import { withNumber } from 'exp-value'

const useToken = () => {
  const { token, setToken } = React.useContext(AppContext)
  const clearToken = React.useCallback(() => setToken(null), [token])

  const isLoggedIn = React.useMemo(() => {
    const validToken = `${token}`.replace('null', '').replace('undefined', '')

    return withNumber('length', validToken) > 100
  }, [token])

  return { token, saveToken: setToken, clearToken, isLoggedIn }
}

export default useToken
