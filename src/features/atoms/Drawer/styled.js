import styled from 'styled-components'
import { Sidenav, Nav, Dropdown, Icon } from 'rsuite'
import BaseButton from '../BaseButton'

export const Wrapper = styled.div`
  width: ${props => (props.expanded ? 250 : 0)}px;
  display: inline-table;
  position: relative;
`

export const Menu = styled(Sidenav)``
export const MenuIcon = styled(Icon)``
export const MenuBody = styled(Sidenav.Body)``
export const Navigator = styled(Nav)``
export const NavItem = styled(Nav.Item)``
export const DropdownWrapper = styled(Dropdown)``
export const DropdownMenu = styled(Dropdown.Menu)``
export const DropdownItem = styled(Dropdown.Item)``
export const SwitchIcon = styled(Icon)`
  font-size: 20px;
`

export const SwitchWrapper = styled(BaseButton)`
  position: absolute;
  right: -15px;
  width: 30px;
  top: 10px;
  height: 30px;
  z-index: 9999999;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`
