import React from 'react'
import { NavItem, MenuIcon, Text } from './styled'
import PropTypes from 'prop-types'

const BaseNavItem = ({
  eventKey,
  iconName,
  activeKey,
  setActiveKey,
  content,
  ...others
}) => {
  return (
    <NavItem
      eventKey={eventKey}
      icon={<MenuIcon name={iconName} />}
      {...others}
      onSelect={e => setActiveKey(e)}
      active={eventKey === activeKey}
    >
      <Text>{content}</Text>
    </NavItem>
  )
}

BaseNavItem.propTypes = {
  iconName: PropTypes.string,
  setActiveKey: PropTypes.func,
  content: PropTypes.string.isRequired,
  eventKey: PropTypes.string,
  activeKey: PropTypes.string
}

export default React.memo(BaseNavItem)
