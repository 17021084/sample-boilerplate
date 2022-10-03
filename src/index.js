import AppProvider from 'config/store/app_context'
import { useTheme } from 'hooks'
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import App from './App'

const AppWrapper = props => {
  const theme = useTheme()

  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <App {...props} />
      </ThemeProvider>
    </AppProvider>
  )
}

ReactDOM.render(<AppWrapper />, document.getElementById('app'))
