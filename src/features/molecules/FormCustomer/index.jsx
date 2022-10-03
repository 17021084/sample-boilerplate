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
  Title,
  WrapperLoading
} from './styled'
import PropTypes from 'prop-types'
import { withBoolean, withEmpty, withNull, withNumber } from 'exp-value'
import { useGraphqlMutation, useAlert, useImage } from 'hooks'
import { v1AdminUpdateUser, v1AdminCreateUser } from 'config/api/Customer'
import { customerModel } from './validation'

const FormCustomer = ({
  customer,
  // loading,
  setReload,
  setCustomer,
  type,
  ...others
}) => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    ref: '',
    avatar: '',
    id: ''
  })
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)

  const updateCustomerMutation = useGraphqlMutation(v1AdminUpdateUser)
  const createCustomerMutation = useGraphqlMutation(v1AdminCreateUser)
  const { showSuccess } = useAlert()
  const { resizeImage, preview } = useImage()

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
    setData({
      ...data,
      [field]: value
    })
  }

  const onSubmit = useCallback(() => {
    if (type == 'update') {
      if (typeof data.avatar == 'string') {
        return updateCustomerMutation.mutate({
          variables: {
            input: {
              attribute: {
                first_name: data.firstName,
                last_name: data.lastName,
                phone: data.phone,
                email: data.email
              },
              id: data.id
            }
          }
        })
      }
      return updateCustomerMutation.mutate({
        variables: {
          input: {
            attribute: {
              first_name: data.firstName,
              last_name: data.lastName,
              phone: data.phone,
              email: data.email
            },
            id: data.id,
            avatar: data.avatar
          }
        }
      })
    }
    if (type == 'add') {
      if (typeof data.avatar == 'string') {
        return createCustomerMutation.mutate({
          variables: {
            input: {
              attribute: {
                first_name: data.firstName,
                last_name: data.lastName,
                phone: data.phone,
                email: data.email
              }
            }
          }
        })
      }
      return createCustomerMutation.mutate({
        variables: {
          input: {
            attribute: {
              first_name: data.firstName,
              last_name: data.lastName,
              phone: data.phone,
              email: data.email
            },

            avatar: data.avatar
          }
        }
      })
    }
  }, [data])

  const onUpdateCustomerHandler = useCallback(() => {
    if (!updateCustomerMutation.data) return
    setLoading(true)
    setTimeout(() => {
      setLoading(withBoolean('isLoading', updateCustomerMutation))
      showSuccess('Cập nhật thành công')
      setReload(true)
    }, 3000)

    // luu lai user
    if (typeof setCustomer == 'function')
      setCustomer('data.v1AdminUpdateUser.data', updateCustomerMutation)
  }, [updateCustomerMutation.data])

  const onCreateCustomerHandler = useCallback(() => {
    if (!createCustomerMutation.data) return
    setLoading(true)

    setTimeout(() => {
      setLoading(withBoolean('isLoading', createCustomerMutation))
      showSuccess('Thêm thành công')
      setReload(true)
    }, 3000)

    // luu lai user
    if (typeof setCustomer == 'function')
      setCustomer('data.v1AdminUpdateUser.data', createCustomerMutation)
  }, [createCustomerMutation.data])

  const getFileAvatar = useCallback(
    e => {
      const image = resizeImage(withEmpty('blobFile', e[0]))
      console.log({ image, preview })

      setFile(e)
      setData({
        ...data,
        avatar: withEmpty('blobFile', e[0])
      })
    },
    [file, data]
  )

  const _renderAvatar = useCallback(() => {
    if (type == 'add' && !file) {
      return (
        <ImageAvatar
          source={
            'https://media.istockphoto.com/vectors/simple-man-head-icon-set-vector-id1196083861?k=6&m=1196083861&s=612x612&w=0&h=wpQleBE2ewChSl3iT2CJAAXE3LKwS4EQuJPjLer2R1Q='
          }
        />
      )
    }
    if (!file || withNumber('length', file) == 0)
      return <ImageAvatar source={data.avatar} />
    return (
      <ImageAvatar
        source={URL.createObjectURL(withEmpty('blobFile', file[0]))}
      />
    )
  }, [file, data])

  const _renderLoading = useCallback(() => {
    return <WrapperLoading />
  }, [loading])

  const _renderForm = useCallback(() => {
    return (
      <LayoutWrapper>
        <Form fluid {...others} model={customerModel}>
          <Title>{contentForm.title}</Title>
          <WrapperAvatar>
            {_renderAvatar()}
            <Uploader
              listType='picture'
              onChange={getFileAvatar}
              autoUpload={false}
              fileListVisible={false}
              multiple={false}
              draggable={true}
            >
              <IconAvatar name='camera-retro' />
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
            <Button type={'submit'} onClick={onSubmit}>
              {contentForm.titleButton}
            </Button>
          </Wrapper>
        </Form>
      </LayoutWrapper>
    )
  }, [data])

  useEffect(() => {
    if (!customer) return
    const expData = {
      firstName: withNull('first_name', customer),
      lastName: withNull('last_name', customer),
      phone: withNull('phone', customer),
      email: withNull('email', customer),
      ref: withNull('user_type', customer),
      avatar: withNull('avatar_url', customer),
      id: withNull('id', customer)
    }
    setData(expData)
  }, [customer])

  useEffect(onUpdateCustomerHandler, [updateCustomerMutation.data])
  useEffect(onCreateCustomerHandler, [createCustomerMutation.data])

  return loading ? _renderLoading() : _renderForm()
}

FormCustomer.propTypes = {
  customer: PropTypes.object,
  setCustomer: PropTypes.func,
  type: PropTypes.string,
  setReload: PropTypes.func
}

export default React.memo(FormCustomer)
