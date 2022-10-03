import { Schema } from 'rsuite'
const { StringType } = Schema.Types

export const userModel = Schema.Model({
  email: StringType()
    .isRequired('Bạn chưa nhập email')
    .isEmail('Email không hợp lệ')
})
