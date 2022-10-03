import { Schema } from 'rsuite'
const { StringType } = Schema.Types

export const customerModel = Schema.Model({
  lastName: StringType().isRequired('Chưa nhập trường tên'),
  firstName: StringType().isRequired('Chưa nhập trường họ và tên đệm'),
  phone: StringType().isRequired('Chưa nhập SĐT'),
  email: StringType()
    .isRequired('Chưa nhập email')
    .isEmail('Sai định dạng email')
})
