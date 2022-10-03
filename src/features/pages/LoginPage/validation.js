import { Schema } from 'rsuite'
const { StringType } = Schema.Types

export const userModel = Schema.Model({
  username: StringType().isRequired('Tài khoản không hợp lệ'),
  password: StringType().isRequired('Mật khẩu không hợp lệ')
})
