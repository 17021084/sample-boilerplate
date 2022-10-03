import React from 'react'
import useStorage from '../useStorage'

const useResetPassword = () => {
  const [token, setToken] = React.useState(undefined)
  const { getValue, saveValue } = useStorage()

  const onGetToken = React.useCallback(async () => {
    const tk = await getValue(process.env.RESET_PASSWORD_TOKEN_KEY)

    setToken(tk)
  }, [])

  const saveToken = React.useCallback(value => {
    if(value) setToken(value)
    saveValue(process.env.RESET_PASSWORD_TOKEN_KEY, value)
  }, [token])

  React.useEffect(onGetToken, [])

  return { resetToken: token, saveToken }
}

export default useResetPassword
