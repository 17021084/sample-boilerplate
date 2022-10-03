import React, { useCallback, useEffect, useState } from 'react'
import { Checkbox, Table } from 'rsuite'
import { useHistory, useLocation } from 'react-router-dom'

import {
  Image,
  Wrapper,
  Icon,
  Text,
  TextNoData,
  WrapperIcon,
  WrapperIconButton,
  Header,
  WrapperPagination,
  Column,
  WrapperImageCell,
  Cell,
  Link,
  Dropdown,
  Modal,
  FormEdit
} from './styled'
import PropTypes from 'prop-types'
import { withEmpty, withRandomImage } from 'exp-value'

const NameCell = ({ rowData, dataKey, ...props }) => {
  return (
    <Cell {...props}>
      <Text>{withEmpty(dataKey, rowData)}</Text>
    </Cell>
  )
}

const ImageCell = ({ rowData, dataKey, ...props }) => (
  <WrapperImageCell {...props}>
    <Image source={withRandomImage(dataKey, rowData)} width='50' />
  </WrapperImageCell>
)

const CheckCell = ({ rowData, onChange, dataKey, ...props }) => {
  return (
    <Cell {...props}>
      <Checkbox value={withEmpty(dataKey, rowData)} onChange={onChange} />
    </Cell>
  )
}

const ActionCell = ({ rowData, setReload, ...props }) => {
  const [showModalFormEdit, setShowModalFormEdit] = useState(false)

  const hideModal = useCallback(() => {
    setShowModalFormEdit(false)
  }, [showModalFormEdit])

  const _renderModalFormCustomer = useCallback(() => {
    return (
      <Modal
        show={showModalFormEdit}
        onHide={() => hideModal()}
        body={
          <FormEdit customer={rowData} type={'update'} setReload={setReload} />
        }
      />
    )
  }, [showModalFormEdit])

  return (
    <Cell {...props}>
      {_renderModalFormCustomer()}
      <WrapperIcon>
        <WrapperIconButton
          onClick={() => setShowModalFormEdit(true)}
          appearance='subtle'
          icon={<Icon name='feather-edit' />}
        />
        <WrapperIconButton
          onClick={() => {}}
          icon={<Icon name='feather-more-horizontal' size={24} />}
        />
      </WrapperIcon>
    </Cell>
  )
}

const TableCustomerGroup = ({
  expData,
  totalRecord,
  page,
  setPage,
  loading,
  setReload,
  ...others
}) => {
  // expData :{
  // id
  // avatar_url
  // first_name
  // last_name
  // phone
  // email
  // user_type
  // remember_created_at
  // role
  // }
  const history = useHistory()
  const location = useLocation()
  const { search } = useLocation()

  const [data, setData] = useState([])

  const onClickCheckbox = useCallback(() => {}, [])
  const onCheckAll = useCallback(() => {}, [])

  const onLoadPage = useCallback(
    page => {
      setPage(page)
      history.push(location.pathname + '?page=' + page)
    },
    [page]
  )

  const onLoadParamPage = useCallback(() => {
    const page = new URLSearchParams(search).get('page')
    if (page) setPage(eval(page))
  }, [location.pathname])

  const _renderEmpty = useCallback(() => {
    return <TextNoData>Không có dữ liệu</TextNoData>
  }, [])

  const _renderTable = useCallback(
    data => {
      return (
        <Table
          data={data}
          loading={loading}
          setReload={setReload}
          wordWrap
          id='table'
          height={window.innerHeight - 200}
          renderEmpty={_renderEmpty}
        >
          <Column width={40} align='center'>
            <Header>
              <Checkbox inline onChange={onCheckAll} />
            </Header>
            <CheckCell dataKey='id' onChange={onClickCheckbox} />
          </Column>
          <Column width={60} align='center'>
            <Header>Avatar</Header>
            <ImageCell dataKey='avatar_url' />
          </Column>

          <Column width={100} sortable>
            <Header>Tên</Header>
            <NameCell dataKey='first_name' />
          </Column>

          <Column width={160} sortable>
            <Header>{'Họ & tên đệm'}</Header>
            <NameCell dataKey='last_name' />
          </Column>

          <Column width={120}>
            <Header>Số điện thoại</Header>
            <Cell>
              {rowData => (
                <Link href={`tel:${rowData.phone}`}>{rowData.phone}</Link>
              )}
            </Cell>
          </Column>

          <Column width={200}>
            <Header>Email</Header>
            <Cell>
              {rowData => (
                <Link href={`mailto:${rowData.email}`}>{rowData.email}</Link>
              )}
            </Cell>
          </Column>

          <Column width={120}>
            <Header>Người giới thiệu</Header>
            <Cell>{rowData => <Link href={``}>{rowData.refID}</Link>}</Cell>
          </Column>

          <Column width={120}>
            <Header>Hành động</Header>
            <ActionCell dataKey='id' loading={loading} setReload={setReload} />
          </Column>
        </Table>
      )
    },
    [loading, data, window.innerHeight]
  )

  useEffect(() => {
    setData(expData)
  }, [expData])

  useEffect(onLoadParamPage, [location.pathname])

  if (!data) return

  return (
    <Wrapper {...others}>
      {_renderTable(data)}
      <WrapperPagination
        activePage={page}
        displayLength={10}
        total={totalRecord}
        renderLengthMenu={() => {
          return <Dropdown items={[10]} title={10} placement='topStart' />
        }}
        renderTotal={() => {
          return 'Trang'
        }}
        onChangePage={e => onLoadPage(e)}
      />
    </Wrapper>
  )
}

NameCell.propTypes = {
  rowData: PropTypes.object,
  dataKey: PropTypes.string
}
ImageCell.propTypes = {
  rowData: PropTypes.object,
  dataKey: PropTypes.string
}
CheckCell.propTypes = {
  rowData: PropTypes.object,
  dataKey: PropTypes.string,
  onChange: PropTypes.func,
  checkedKeys: PropTypes.array
}
ActionCell.propTypes = {
  rowData: PropTypes.object,
  dataKey: PropTypes.string,
  showModalFormEdit: PropTypes.bool,
  setShowModalFormEdit: PropTypes.func,
  loading: PropTypes.bool,
  setReload: PropTypes.func
}
TableCustomerGroup.propTypes = {
  expData: PropTypes.array,
  totalRecord: PropTypes.number,
  page: PropTypes.number,
  setPage: PropTypes.func,
  loading: PropTypes.bool,
  setReload: PropTypes.func,
  showModalFormEdit: PropTypes.bool,
  setShowModalFormEdit: PropTypes.func
}

export default React.memo(TableCustomerGroup)
