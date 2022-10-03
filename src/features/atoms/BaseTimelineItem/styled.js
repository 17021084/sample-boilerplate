import styled from 'styled-components'
import { Timeline } from 'rsuite'

export const TimelineItem = styled(Timeline.Item)`
  .rs-timeline-item-tail {
    // top: -10px !important;
    bottom: -10px !important;
    background: #b7bbcb;
  }
  .rs-timeline-item-dot {
    top: 2px;
    &:before {
      background: #b7bbcb;
    }
  }
  ${props =>
    props.active &&
    `
    .rs-timeline-item-tail {
      background: ${props.theme.colors.primary} !important;
    }
    .rs-timeline-item-dot {
      &:before {
        background: ${props.theme.colors.primary} !important;
      }
    }`}
`
export const Title = styled.div`
  margin: 0 0 10px;
  font-weight: bold;
`
