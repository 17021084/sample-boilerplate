import gql from 'graphql-tag'

export const v1AdminSignIn = gql`
  mutation v1AdminSignIn($input: AdminSignInInput!) {
    v1AdminSignIn(input: $input) {
      data {
        token
        user {
          id
          role
          phone
          first_name
          last_name
          gender
          email
        }
      }
    }
  }
`
export const v1AdminForgotPassword = gql`
  mutation v1AdminForgotPassword($input: AdminForgotPasswordInput!) {
    v1AdminForgotPassword(input: $input) {
      data {
        is_success
        message
      }
    }
  }
`
export const v1AdminResetPassword = gql`
  mutation v1AdminResetPassword($input: AdminResetPasswordInput!) {
    v1AdminResetPassword(input: $input) {
      data {
        is_success
        message
      }
    }
  }
`

