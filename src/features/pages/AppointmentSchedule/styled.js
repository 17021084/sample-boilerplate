import styled from 'styled-components'
import {
  BaseWrapper,
  BaseText,
  BaseButton,
  BaseTimelineItem,
  Loading,
  BaseModal
} from 'atoms'
import { TimelineGroup, AuctionInfoGroup, AuctionDetail } from 'molecules'

export const Wrapper = styled(BaseWrapper)`
  height: auto;
  display: block;
  height: 80px;
  width: 100%;
  position: relative;
`
export const Text = styled(BaseText)`
  color: ${props => props.theme.colors.gray[1]};
`
export const Button = styled(BaseButton)`
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px;
  border-radius: 4px;
`
export const Timeline = styled(TimelineGroup)`
  height: 100vh;
  display: block;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
  scrollbar-width: none;
`
export const AuctionInfo = styled(AuctionInfoGroup)`
  cursor: pointer;
`
export const TimelineItem = styled(BaseTimelineItem)``
export const WrapperLoading = styled(Loading)``
export const Modal = styled(BaseModal)``
export const Auction = styled(AuctionDetail)``
