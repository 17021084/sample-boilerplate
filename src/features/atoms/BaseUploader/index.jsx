import React from 'react'
import { Wrapper, WrapperUploader } from './styled'
import PropTypes from 'prop-types'

const BaseUploader = ({ children, container, ...rest }) => {
  return (
    <Wrapper {...container}>
      <WrapperUploader {...rest}>{children}</WrapperUploader>
    </Wrapper>
  )
}
BaseUploader.propTypes = {
  children: PropTypes.any,
  container: PropTypes.any
}
export default React.memo(BaseUploader)
