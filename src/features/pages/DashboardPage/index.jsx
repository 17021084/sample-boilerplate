import React from 'react'
import { Wrapper, Text, Button } from './styled'
import { Routers } from 'utils'
import { useHistory } from 'react-router-dom'
import { useStorage, useToken } from 'hooks'

const DashboardPage = () => {
  const { reset } = useStorage()
  const { clearToken } = useToken()
  const history = useHistory()

  const onLogout = React.useCallback(() => {
    const execute = async () => {
      await reset()

      clearToken()

      history.push(Routers.SIGN_IN_PAGE)
    }

    execute()
  }, [])

  return (
    <Wrapper>
      <Text>DashboardPage</Text>
      <Button onClick={() => onLogout()}>Logout</Button>
    </Wrapper>
  )
}

export default React.memo(DashboardPage)
