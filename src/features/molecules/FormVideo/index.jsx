import React, { useState, useCallback, useEffect, useMemo } from 'react'
import InputGroup from '../InputGroup'
import {
  Button,
  Form,
  Icon,
  LayoutWrapper,
  WrapperAvatar,
  Wrapper,
  Uploader,
  IconAvatar,
  ImageAvatar,
  Title
} from './styled'
import PropTypes from 'prop-types'

const FormVideo = ({ customer, type, ...others }) => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    ref: '',
    avatar: ''
  })

  const contentForm = useMemo(() => {
    if (type == 'add') {
      return {
        title: 'Thêm mới khách hàng',
        titleButton: 'Thêm mới'
      }
    }
    if (type == 'update') {
      return {
        title: 'Chỉnh sửa thông tin',
        titleButton: 'Cập nhật'
      }
    }
  }, [type])

  const _handleChangeCustomer = field => value => {
    if (field === 'email') {
      setData({
        ...data,
        [field]: value.toLowerCase()
      })
    } else {
      setData({
        ...data,
        [field]: value
      })
    }
  }

  const onSubmit = useCallback(() => {
    console.log(data)
  }, [data])

  useEffect(() => {
    if (!customer) return
    const expData = {
      firstName: customer.first_name,
      lastName: customer.last_name,
      phone: customer.phone,
      email: customer.email,
      ref: customer.user_type,
      avatar: customer.avatar_url
    }
    setData(expData)
  }, [customer])

  return (
    <LayoutWrapper>
      <Form fluid {...others}>
        <Title>{contentForm.title}</Title>
        <WrapperAvatar>
          <ImageAvatar source={data.avatar} />
          <Uploader multiple listType='picture' action=''>
            <IconAvatar icon='camera-retro' />
          </Uploader>
        </WrapperAvatar>

        <InputGroup
          value={data.firstName}
          label={'Tên'}
          onChange={_handleChangeCustomer('firstName')}
          placeholder={'Tên'}
          name={'firstName'}
          leftIcon={<Icon name={'feather-user'} />}
        />
        <InputGroup
          value={data.lastName}
          label={'Họ và tên đệm'}
          onChange={_handleChangeCustomer('lastName')}
          placeholder={'Họ và tên đệm'}
          name={'lastName'}
          leftIcon={<Icon name={'feather-user'} />}
        />
        <InputGroup
          value={data.phone}
          label={'Số điện thoại'}
          onChange={_handleChangeCustomer('phone')}
          placeholder={'Số điện thoại'}
          name={'phone'}
          leftIcon={<Icon name={'feather-phone'} />}
        />

        <InputGroup
          value={data.email}
          label={'Email'}
          onChange={_handleChangeCustomer('email')}
          placeholder={'Email'}
          name={'email'}
          leftIcon={<Icon name={'feather-mail'} />}
        />

        <InputGroup
          value={data.ref}
          label={'Người giới thiệu'}
          onChange={_handleChangeCustomer('ref')}
          placeholder={'Người giới thiệu'}
          name={'ref'}
          leftIcon={<Icon name={'feather-award'} />}
        />

        <Wrapper>
          <Button type={'submit'} onClick={() => onSubmit()}>
            {contentForm.titleButton}
          </Button>
        </Wrapper>
      </Form>
    </LayoutWrapper>
  )
}

FormVideo.propTypes = {
  customer: PropTypes.object,
  type: PropTypes.string.isRequired
}

export default React.memo(FormVideo)
