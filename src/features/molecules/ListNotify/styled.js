import styled from 'styled-components'
import {
  BaseIcon,
  BaseText,
  BaseItemGrid,
  BaseBadge,
  BaseWrapper,
  BaseNotify
} from 'atoms'

export const WrapperCalendar = styled.div`
  height: max-content;
  position: absolute;
  bottom: 5px;
  left: 5px;
  right: 5px;
`
export const WrapperContainer = styled.div`
  min-width: 200px;
  padding: 5px;
  background: ${props => props.theme.colors.white};
  box-sizing: border-box;
  width: 100%;
  display: block;
  position: relative;
  height: 100%;
`
export const GridItemContainer = styled(BaseItemGrid)`
  height: 100vh;
  padding: 0;
  @media screen and (max-width: 480px) {
    height: calc(100vh - 90px);
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 100;
  }
`
export const HeaderListNotification = styled(BaseWrapper)`
  align-items: center;
  height: 60px;
  padding-top: 10px;
  display: flex;
`
export const WrapperIcon = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 10px;
`
export const NotifyIcon = styled(BaseIcon)`
  font-size: 24px;
  color: ${props =>
    props.active ? props.theme.colors.primary : props.theme.colors.gray[1]};
`
export const WrapperBadge = styled(BaseBadge)`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(30%, -30%);
  font-size: 9px;
  background: ${props => props.theme.colors.red[0]};
`
export const Wrapper = styled(BaseWrapper)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`
export const WrapperListNotify = styled.div`
  overflow: auto;
  height: calc(100vh - 350px);
  overflow-x: hidden;
  // hide scrollbar for chrome and edge
  &::-webkit-scrollbar {
    width: 0;
  }
  // hide scrollbar for firefox
  scrollbar-width: none;
`
export const Notify = styled(BaseNotify)``

export const ContentTitle = styled(BaseText)`
  color: ${props => props.theme.colors.gray[1]};
`
export const TextLink = styled(BaseText)`
  color: ${props => props.theme.colors.primary};
  font-size: 12px;
  cursor: pointer;
`
