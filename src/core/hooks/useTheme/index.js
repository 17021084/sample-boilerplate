import React from 'react'
import { DarkTheme, LightTheme } from 'config/theme'
import { AppContext } from 'config/store/app_context'

const useTheme = () => {
  const { scheme } = React.useContext(AppContext)

  const theme = React.useMemo(
    () => (scheme === 'dark' ? DarkTheme : LightTheme),
    [scheme]
  )

  return theme
}

export default useTheme
