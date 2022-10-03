import React from 'react'
import { BodyWrapper, GridItem, Wrapper, WrapperContainer } from './styled'
import PropTypes from 'prop-types'

const PublicTemplate = ({ children, ...others }) => {
  return (
    <WrapperContainer>
      <GridItem xs={24} sm={16} md={12} lg={6}>
        <Wrapper>
          <BodyWrapper {...others}>{children}</BodyWrapper>
        </Wrapper>
      </GridItem>
    </WrapperContainer>
  )
}
PublicTemplate.propTypes = {
  children: PropTypes.any
}
export default React.memo(PublicTemplate)
