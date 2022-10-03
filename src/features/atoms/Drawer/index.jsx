import React from 'react'
import {
  DropdownItem,
  DropdownMenu,
  DropdownWrapper,
  Menu,
  MenuBody,
  MenuIcon,
  Navigator,
  NavItem,
  Wrapper,
  SwitchIcon,
  SwitchWrapper
} from './styled'

const Drawer = ({ ...props }) => {
  const [expanded, setExpanded] = React.useState(true)
  const [activeKey, setActiveKey] = React.useState('1')

  const icon = React.useMemo(() => (expanded ? 'angle-left' : 'angle-right'), [
    expanded
  ])

  const onToggle = React.useCallback(() => setExpanded(!expanded), [expanded])
  const onDrawerSelected = React.useCallback(event => setActiveKey(event), [
    activeKey
  ])

  return (
    <Wrapper expanded={expanded}>
      <SwitchWrapper onClick={onToggle}>
        <SwitchIcon icon={icon} />
      </SwitchWrapper>
      <Menu
        {...props}
        expanded={expanded}
        defaultOpenKeys={['1', '2', '3', '4']}
        activeKey={activeKey}
        onSelect={onDrawerSelected}
      >
        <MenuBody>
          <Navigator>
            <NavItem eventKey='1' active icon={<MenuIcon icon='dashboard' />}>
              Dashboard
            </NavItem>
            <NavItem eventKey='2' icon={<MenuIcon icon='group' />}>
              User Group
            </NavItem>
            <DropdownWrapper
              eventKey='3'
              title='Advanced'
              icon={<MenuIcon icon='magic' />}
            >
              <DropdownItem eventKey='3-1'>Geo</DropdownItem>
              <DropdownItem eventKey='3-2'>Devices</DropdownItem>
              <DropdownItem eventKey='3-3'>Loyalty</DropdownItem>
              <DropdownItem eventKey='3-4'>Visit Depth</DropdownItem>
            </DropdownWrapper>
            <DropdownWrapper
              eventKey='4'
              title='Settings'
              icon={<MenuIcon icon='gear-circle' />}
            >
              <DropdownItem eventKey='4-1'>Applications</DropdownItem>
              <DropdownItem eventKey='4-2'>Channels</DropdownItem>
              <DropdownItem eventKey='4-3'>Versions</DropdownItem>
              <DropdownMenu eventKey='4-5' title='Custom Action'>
                <DropdownItem eventKey='4-5-1'>Action Name</DropdownItem>
                <DropdownItem eventKey='4-5-2'>Action Params</DropdownItem>
              </DropdownMenu>
            </DropdownWrapper>
          </Navigator>
        </MenuBody>
      </Menu>
    </Wrapper>
  )
}

export default React.memo(Drawer)
