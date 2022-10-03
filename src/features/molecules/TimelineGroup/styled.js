import styled from 'styled-components'
import {
  BaseContainer,
  BaseText,
  BaseDropdown,
  BaseNav,
  BaseImage,
  BaseIcon,
  BaseTimelineItem
} from 'atoms'
import { Timeline } from 'rsuite'

export const Container = styled(BaseContainer)`
  height: 100%;
  @media screen and (max-width: 480px) {
    margin: 0 10px;
  }
`

export const Text = styled(BaseText)``

export const Dropdown = styled(BaseDropdown)``

export const Nav = styled(BaseNav)``

export const WrapperTimeline = styled(Timeline)`
  .rs-timeline-item:first-child .rs-timeline-item-dot {
    display: none;
  }
`
export const TimelineItem = styled(BaseTimelineItem)``

export const Image = styled(BaseImage)``

export const Icon = styled(BaseIcon)``
