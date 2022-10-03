import React from 'react'
import { Container, WrapperTimeline, TimelineItem } from './styled'
import PropTypes from 'prop-types'

const TimelineGroup = ({ children, ...others }) => {
  return (
    <Container>
      <WrapperTimeline {...others} appearance='default' endless>
        <TimelineItem
          active={typeof children == 'object'}
          className='firstTimelineItem'
        />
        {children}
      </WrapperTimeline>
    </Container>
  )
}

TimelineGroup.propTypes = {
  children: PropTypes.node
}

export default React.memo(TimelineGroup)
