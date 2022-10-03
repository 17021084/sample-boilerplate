import styled from 'styled-components'
import { Sidenav, Nav, Dropdown } from 'rsuite'
import { BaseIcon, BaseImage, BaseText, BaseNavItem, BaseItemGrid } from 'atoms'
import AvatarGroup from '../AvatarGroup'

export const WrapperContainer = styled.div`
  height: 100%;
  background: ${props => props.theme.colors.white};
  box-sizing: border-box;
  width: 100%;
  display: inline-table;
  position: relative;
  @media screen and (max-width: 480px) {
    width: 100%;
    display: block;
  }
`
export const GridItem = styled(BaseItemGrid)`
  padding: 0;
  height: 100vh;
  @media screen and (max-width: 480px) {
    height: calc(100vh - 90px);
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 100;
    width: 100%;
  }
  @media screen and (max-width: 1200px) and (min-width: 480px) {
    width: 56px;
  }
`
export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0 20px 10px;
  @media screen and (max-width: 1200px) and (min-width: 480px) {
    padding: 20px 5px;
    div {
      display: none;
    }
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    svg {
      width: 30px;
      margin: 10px;
    }
  }
`
export const Menu = styled(Sidenav)`
  background: ${props => props.theme.colors.transparent}; ;
`
export const MenuHeader = styled(Sidenav.Header)`
  display: flex;
  align-items: center;
`
export const MenuIcon = styled(BaseIcon)`
  position: absolute;
  left: 15px;
`
export const Image = styled(BaseImage)`
  height: 50px;
`
export const TextLogo = styled.div`
  font-size: 20px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
  padding: 10px;
`
const hiddenMenu = `
  display: none;
`
const showMenu = `
  display: block;
`
export const MenuBody = styled(Sidenav.Body)`
  ${props => (props.active == 'true' ? hiddenMenu : showMenu)};
`
export const WrapperIcon = styled.div`
  min-width: 30px;
  display: flex;
  align-items: center;
`
export const Navigator = styled(Nav)``
export const NavItem = styled(BaseNavItem)``

const styleActive = theme => {
  return ` 
  a {
    background: ${theme.colors.sideNav} !important;
    color: ${theme.colors.gray[1]} !important;
    font-weight: bold;
    svg {
      color: ${theme.colors.primary};
    }
    &:after {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      content: '';
      width: 3px;
      border-radius: 2px 0 0 2px;
      background: ${theme.colors.primary};
    }
  }
  position: relative;
  `
}
export const DropdownWrapper = styled(Dropdown)`
  ${props => props.active && styleActive(props.theme)};
  a {
    color: ${props => props.theme.colors.gray[1]};
  }
`
export const DropdownItem = styled(Dropdown.Item)`
  ${props => props.active && styleActive(props.theme)}
`

export const Text = styled(BaseText)`
  color: ${props => props.theme.colors.gray[1]};
`
export const CardAvatar = styled(AvatarGroup)``
export const Footer = styled.div`
  position: absolute;
  bottom: 2.5%;
  margin: 2.5%;
  width: 95%;
  display: block;
  @media screen and (max-width: 1200px) and (min-width: 480px) {
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    bottom: 0;
  }
`
