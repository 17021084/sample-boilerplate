import { withEmpty } from 'exp-value'
import PropTypes from 'prop-types'
import React, { useCallback, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Checkbox, Table } from 'rsuite'
import Routers from '../../../utils/Routers'
import {
  Cell,
  Column,
  Dropdown,
  Header,
  Icon,
  Image,
  Text,
  Wrapper,
  WrapperIcon,
  WrapperIconButton,
  WrapperImageCell,
  WrapperPagination,
  TextNoData
} from './styled'

const NameCell = ({ rowData, dataKey, ...props }) => {
  return (
    <Cell {...props}>
      <Text>{withEmpty(dataKey, rowData)}</Text>
    </Cell>
  )
}

const ImageCell = ({ rowData, dataKey, ...props }) => (
  <WrapperImageCell {...props}>
    <Image source={withEmpty(dataKey, rowData)} width='50' />
  </WrapperImageCell>
)

const CheckCell = ({ rowData, onChange, dataKey, ...props }) => {
  return (
    <Cell {...props}>
      <Checkbox value={withEmpty(dataKey, rowData)} onChange={onChange} />
    </Cell>
  )
}

const ActionCell = ({ rowData, dataKey, ...props }) => {
  const history = useHistory()
  const editVideo = useCallback(() => {
    history.push(Routers.VIDEO[0] + `?id=${withEmpty(dataKey, rowData)}`)
  }, [])
  return (
    <Cell {...props}>
      <WrapperIcon>
        <WrapperIconButton
          onClick={() => editVideo()}
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

const TableVideoGroup = ({
  expData,
  totalRecord,
  page,
  setPage,
  ...others
}) => {
  const history = useHistory()
  const location = useLocation()
  const { search } = useLocation()

  const [data, setData] = useState([])

  const onClickCheckbox = useCallback(e => console.log(e), [])
  const onCheckAll = useCallback(e => console.log(e), [])

  const onLoadPage = useCallback(
    page => {
      setPage(page)
      history.push(location.pathname + '?page=' + page)
    },
    [location.pathname, page]
  )

  const onLoadParamPage = useCallback(() => {
    const page = new URLSearchParams(search).get('page')
    if (page) setPage(eval(page))
  }, [location.pathname])

  const _renderEmpty = useCallback(() => {
    return <TextNoData>Không có dữ liệu</TextNoData>
  }, [])

  useEffect(() => {
    setData(expData)
  }, [expData])

  useEffect(onLoadParamPage, [location.pathname])

  if (!data) return

  return (
    <Wrapper {...others}>
      <Table
        data={data}
        loading={false}
        wordWrap
        id='table-video'
        renderEmpty={_renderEmpty}
        height={window.innerHeight - 200}
      >
        <Column width={40} align='center'>
          <Header>
            <Checkbox inline onChange={onCheckAll} />
          </Header>
          <CheckCell dataKey='id' onChange={onClickCheckbox} />
        </Column>

        <Column width={160} align='center'>
          <Header>Hình ảnh</Header>
          <ImageCell dataKey='cover_url' />
        </Column>

        <Column width={250} sortable>
          <Header>Tiêu đề</Header>
          <NameCell dataKey='title' />
        </Column>

        {/* <Column width={500} sortable>
          <Header>Mô tả</Header>
          <NameCell dataKey='description' />
        </Column> */}

        <Column width={100} align='center'>
          <Header>Trạng thái</Header>
          <NameCell dataKey='status' />
        </Column>

        <Column width={120}>
          <Header>Hành động</Header>
          <ActionCell dataKey='id' />
        </Column>
      </Table>

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
  dataKey: PropTypes.string
}
TableVideoGroup.propTypes = {
  expData: PropTypes.array,
  totalRecord: PropTypes.number,
  page: PropTypes.number,
  setPage: PropTypes.func
}

export default React.memo(TableVideoGroup)
