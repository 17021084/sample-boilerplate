import { v1AdminResetPassword } from 'config/api/Auth'
import { withNull } from 'exp-value'
import { useGraphqlMutation, useResetPassword } from 'hooks'
import React, { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { InputGroup } from 'molecules'
import { Routers } from 'utils'
import {
  Button,
  ButtonToolbar,
  Form,
  Icon,
  LayoutWrapper,
  Header
} from './styled'
import { userModel } from './validation'

const ResetPasswordPage = () => {
  const { saveToken } = useResetPassword()
  const { search } = useLocation()
  const [password, setPassword] = useState('')
  const [confirmedPassword, setConfirmPassword] = useState('')
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false
  })

  const resetMutation = useGraphqlMutation(v1AdminResetPassword)
  const onChangePassword = useCallback(v => setPassword(v), [password])
  const onChangeConfirmPassword = useCallback(v => setConfirmPassword(v), [
    confirmedPassword
  ])

  const onSaveToken = useCallback(() => {
    const token = new URLSearchParams(search).get('token')

    saveToken(token)
  }, [search])

  const onSubmit = useCallback(
    () =>
      resetMutation.mutate({
        variables: {
          input: {
            attribute: {
              password,
              confirmedPassword
            }
          }
        }
      }),
    [password, confirmedPassword]
  )
  const onShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }
  const onResetHandler = useCallback(() => {
    const isLoggedIn = withNull(
      'data.v1AdminResetPassword.data.token',
      resetMutation
    )
    if (isLoggedIn) {
      history.push(Routers.SIGN_IN_PAGE)
    }
  }, [resetMutation.data])

  useEffect(onSaveToken, [search])
  useEffect(onResetHandler, [resetMutation.data])

  return (
    <LayoutWrapper>
      <Header title='BIDMA portal' subTitle='Mật khẩu mới' />
      <Form fluid model={userModel} onSubmit={onSubmit}>
        <InputGroup
          value={password}
          onChange={onChangePassword}
          placeholder={'Nhập mật khẩu mới'}
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
        <InputGroup
          value={confirmedPassword}
          onChange={onChangeConfirmPassword}
          placeholder={'Xác nhận mật khẩu mới'}
          name={'confirmed-password'}
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
          <Button type={'submit'}>XÁC NHẬN</Button>
        </ButtonToolbar>
      </Form>
    </LayoutWrapper>
  )
}

export default React.memo(ResetPasswordPage)
