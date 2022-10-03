import { Schema } from 'rsuite'
const { StringType } = Schema.Types

export const userModel = Schema.Model({
  password: StringType().isRequired('Bạn chưa nhập mật khẩu'),
  'confirmed-password': StringType().isRequired('Bạn chưa nhập mật khẩu mới')
})
