import styled from 'styled-components'
import { Sidenav } from 'rsuite'
import { BaseIcon, BaseImage, BaseBadge } from 'atoms'

export const MenuHeader = styled(Sidenav.Header)`
  display: flex;
  align-items: center;
`
export const MenuIcon = styled(BaseIcon)`
  color: ${props =>
    props.active ? props.theme.colors.primary : props.theme.colors.gray[1]};
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
export const WrapperIcon = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  ${props => props.left && `margin-left: ${props.left}px`};
  ${props => props.right && `margin-right: ${props.right}px`};

  @media screen and (min-width: 480px) {
    display: none;
  }
`
export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0 20px 20px;
  @media screen and (max-width: 992px) and (min-width: 480px) {
    padding: 20px 5px;
    div {
      display: none;
    }
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 20px 5px;
  }
`
export const WrapperBadge = styled(BaseBadge)`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(30%, -30%);
  font-size: 9px;
  background: ${props => props.theme.colors.red[0]};
`
