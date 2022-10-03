import { TopBody } from 'molecules'
import { WrapperContentBody } from 'organisms'
import React, { useMemo, useState, useCallback } from 'react'
import { Constants } from 'utils'
import PropTypes from 'prop-types'

const OrderManagement = ({ children, ...others }) => {
  const [activeKeyNav, setActiveKeyNav] = useState('1')
  const onSelect = React.useCallback(e => setActiveKeyNav(e), [activeKeyNav])

  const contentTab = useMemo(() => {
    return Constants.auctionsStatus.map(obj => obj.content)
  }, [])

  const TopTab = useCallback(() => {
    return <TopBody />
  }, [])

  return (
    <WrapperContentBody
      top={TopTab()}
      contentBody={Constants.contentPage[4].title}
      items={contentTab}
      count={[15, 1, 2, 3, 4, 5]}
      activeKey={activeKeyNav}
      setActiveKey={onSelect}
      {...others}
    >
      {children}
    </WrapperContentBody>
  )
}

OrderManagement.propTypes = {
  children: PropTypes.any
}

export default React.memo(OrderManagement)
