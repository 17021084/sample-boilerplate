import React from 'react'
import { TimelineItem, Title } from './styled'
import PropTypes from 'prop-types'

const BaseTimelineItem = ({ title, active, children, ...others }) => {
  return (
    <TimelineItem active={active} {...others}>
      <Title>{title}</Title>
      {children}
    </TimelineItem>
  )
}

BaseTimelineItem.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  active: PropTypes.bool
}

TimelineItem.propTypes = {
  active: PropTypes.bool
}

export default React.memo(BaseTimelineItem)
