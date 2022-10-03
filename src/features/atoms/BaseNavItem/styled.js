import styled from 'styled-components'
import { Nav } from 'rsuite'
import BaseIcon from '../BaseIcon'
import BaseText from '../BaseText'

export const NavItem = styled(Nav.Item)`
  ${props =>
    props.active &&
    `background: ${props.theme.colors.sideNav};
    svg {
      color: ${props.theme.colors.primary};
    }
    &:after {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      content: '';
      width: 3px;
      border-radius: 2px 0 0 2px;
      background: ${props.theme.colors.primary};
    }
    p {
      color: ${props.theme.colors.gray[1]};
      font-weight: bold;
    }`
  }

  padding-right: 3px;
  position: relative;
  svg {
    margin-left: 5px;
  }
  @media screen and (max-width: 992px) {
  }
`
export const Text = styled(BaseText)`
  color: ${props => props.theme.colors.gray[1]};
`
export const MenuIcon = styled(BaseIcon)`
  font-size: 24px;
  position: absolute;
  left: 10px;
  color: ${props =>
    props.active ? props.theme.colors.primary : props.theme.colors.gray[1]};
`
