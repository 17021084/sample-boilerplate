import React from 'react'
import { WrapperTable } from './styled'
import PropTypes from 'prop-types'

const BaseTable = ({ children, ...others }) => {
  return <WrapperTable {...others}>{children}</WrapperTable>
}

BaseTable.propTypes = {
  children: PropTypes.node
}

export default React.memo(BaseTable)
