import React from 'react'
import { Wrapper, WrapperLeft, WrapperRight, Text } from './styled'
import PropTypes from 'prop-types'

const BaseAuction = ({ content, value, ...others }) => {
  return (
    <Wrapper {...others}>
      <WrapperLeft>{content}</WrapperLeft>
      <WrapperRight>
        <Text bold>{value}</Text>
      </WrapperRight>
    </Wrapper>
  )
}
BaseAuction.propTypes = {
  content: PropTypes.string,
  value: PropTypes.node
}

export default React.memo(BaseAuction)
