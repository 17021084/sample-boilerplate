import React from 'react'
import { WrapperCalendar } from './styled'
import PropTypes from 'prop-types'

const BaseCalendar = ({ renderCell, ...others }) => {
  return <WrapperCalendar renderCell={renderCell} {...others} />
}
BaseCalendar.propTypes = {
  renderCell: PropTypes.func
}

export default React.memo(BaseCalendar)
