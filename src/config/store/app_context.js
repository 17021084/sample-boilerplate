import React from 'react'
import { useStorage } from 'hooks'
import PropTypes from 'prop-types'

export const AppContext = React.createContext({ scheme: 'light', token: null })

const AppProvider = ({ children }) => {
  const { getValue, saveValue } = useStorage()

  const [scheme, setScheme] = React.useState('light')
  const [token, setToken] = React.useState(null)

  const onLoadToken = React.useCallback(() => {
    const load = async () => {
      const tk = await getValue(process.env.SECRET_TOKEN_KEY)

      setToken(tk)
    }

    load()
  }, [token])

  const onSetToken = React.useCallback(value => {
    setToken(value)

    saveValue(process.env.SECRET_TOKEN_KEY, value)
  }, [])

  React.useEffect(onLoadToken, [])

  return (
    <AppContext.Provider
      value={{
        token,
        setToken: onSetToken,
        scheme,
        setScheme
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.element.isRequired
}

export default AppProvider
