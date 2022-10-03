import { v1AdminSignIn } from 'config/api/Auth'
import { withNull } from 'exp-value'
import { useGraphqlMutation, useToken, useUser } from 'hooks'
import { InputGroup } from 'molecules'
import React, { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Routers } from 'utils'
import {
  Button,
  ButtonToolbar,
  ForgotButton,
  Form,
  Icon,
  LayoutWrapper,
  Header
} from './styled'
import { userModel } from './validation'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [values, setValues] = useState({
    password: '',
    showPassword: false
  })

  const { saveToken } = useToken()
  const { saveUser } = useUser()
  const loginMutation = useGraphqlMutation(v1AdminSignIn)
  const history = useHistory()

  const onChangeUsername = useCallback(v => setUsername(v), [username])
  const onChangePassword = useCallback(v => setPassword(v), [password])
  const onSubmit = useCallback(
    () =>
      loginMutation.mutate({
        variables: {
          input: {
            attribute: {
              username,
              password
            }
          }
        }
      }),
    [username, password]
  )
  const onShowPassword = useCallback(
    () => setValues({ ...values, showPassword: !values.showPassword }),
    [values]
  )

  const onLoginHandler = useCallback(() => {
    const token = withNull('data.v1AdminSignIn.data.token', loginMutation)
    const user = withNull('data.v1AdminSignIn.data.user', loginMutation)

    if (token) {
      saveToken(token)
      saveUser(user)

      history.push(Routers.DASHBOARD_PAGE)
    }
  }, [loginMutation.data])

  const onGotoForgotPassword = useCallback(
    () => history.push(Routers.FORGOT_PASSWORD_PAGE),
    []
  )

  useEffect(onLoginHandler, [loginMutation.data])

  return (
    <LayoutWrapper>
      <Header title='BIDMA portal' subTitle='Đăng nhập' />
      <Form fluid model={userModel} onSubmit={onSubmit}>
        <InputGroup
          value={username}
          onChange={onChangeUsername}
          placeholder={'Tên đăng nhập'}
          name={'username'}
          leftIcon={<Icon name={'feather-user'} />}
        />
        <InputGroup
          value={password}
          onChange={onChangePassword}
          placeholder={'Mật khẩu'}
          name={'password'}
          type={values.showPassword ? 'text' : 'password'}
          leftIcon={<Icon name={'feather-lock'} />}
          rightIcon={
            <Icon
              name={values.showPassword ? 'feather-eye-off' : 'feather-eye'}
              background='true'
              onClick={onShowPassword}
            />
          }
        />
        <ButtonToolbar>
          <ForgotButton appearance='link' onClick={onGotoForgotPassword}>
            Quên mật khẩu?
          </ForgotButton>
          <Button type={'submit'}>ĐĂNG NHẬP</Button>
        </ButtonToolbar>
      </Form>
    </LayoutWrapper>
  )
}

export default React.memo(LoginPage)
