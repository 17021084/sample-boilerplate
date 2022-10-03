import { v1AdminCustomers } from 'config/api/Customer'
import { withArray, withBoolean, withNull, withNumber } from 'exp-value'
import { useDebounce, useGraphqlQuery } from 'hooks'
import { TableCustomerGroup, TopBody } from 'molecules'
import { WrapperContentBody } from 'organisms'
import React, { useCallback, useEffect, useState } from 'react'
import { Constants } from 'utils'
import { Modal, FormAddCustomer } from './styled'

const CustomerPage = ({ ...others }) => {
  const [listCustomer, setListCustomer] = useState([])
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [showModalAddCustomer, setShowModalAddCustomer] = useState(false)

  const searchInput = useDebounce(search, 5000)

  const [totalPage, setTotalPage] = useState(1)
  const [totalRecord, setTotalRecord] = useState(1)
  const [reload, setReload] = useState(true)

  const customerListQuery = useGraphqlQuery(v1AdminCustomers)

  const TopTab = React.useCallback(() => {
    return (
      <TopBody
        search={search}
        setSearch={setSearch}
        status={1}
        buttonAction={() => setShowModalAddCustomer(true)}
      />
    )
  }, [search, showModalAddCustomer])

  const _renderModalAddCustomer = useCallback(() => {
    if (!showModalAddCustomer) return
    return (
      <Modal
        show={showModalAddCustomer}
        onHide={() => setShowModalAddCustomer(false)}
        body={<FormAddCustomer type={'add'} setReload={setReload} />}
      />
    )
  }, [showModalAddCustomer])

  const _renderTableCustomer = useCallback(() => {
    return (
      <TableCustomerGroup
        expData={listCustomer}
        page={page}
        setPage={setPage}
        totalRecord={totalRecord}
        totalPage={totalPage}
        loading={reload}
        setReload={setReload}
      />
    )
  }, [listCustomer, page, reload])

  const getListCustomer = useCallback(() => {
    customerListQuery.query({
      variables: {
        filter: {
          first_name_or_last_name_or_phone_or_email_matches: `%${searchInput}%`
        },
        page: page
      }
    })
  }, [searchInput, page])

  useEffect(() => {
    setReload(withBoolean('isLoading', customerListQuery))

    const r = withArray('data.v1AdminCustomers.edges', customerListQuery)
    const result = r.map(node => {
      return withNull('node', node)
    })
    setListCustomer(result)

    const meta = withArray('data.v1AdminCustomers.meta', customerListQuery)
    setTotalRecord(withNumber('total_count', meta))
    setTotalPage(withNumber('total_pages', meta))
  }, [customerListQuery.data])

  useEffect(() => {
    if (reload) {
      getListCustomer()
      setReload(false)
    }
  }, [reload])

  useEffect(() => {
    getListCustomer()
  }, [searchInput, page])

  return (
    <WrapperContentBody
      top={TopTab()}
      contentBody={Constants.contentPage[2].title}
      {...others}
    >
      {_renderModalAddCustomer()}
      {_renderTableCustomer()}
    </WrapperContentBody>
  )
}

export default React.memo(CustomerPage)
