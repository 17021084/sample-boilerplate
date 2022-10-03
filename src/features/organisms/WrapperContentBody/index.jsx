// nav chung cho cac page

// title
// header
//   --tab
//   --
// body
//   --component
//   --footer
import React from 'react'
import {
  BodyWrapper,
  LayoutWrapper,
  Wrapper,
  Nav,
  ContentBody,
  Text
} from './styled'
import PropTypes from 'prop-types'

const WrapperContentBody = ({
  top,
  contentBody,
  count,
  items,
  children,
  activeKey,
  setActiveKey,
  ...others
}) => {
  return (
    <Wrapper className='body__wrapper'>
      <Text>{contentBody}</Text>
      <ContentBody>
        {top}
        {items && (
          <Nav
            items={items}
            count={count}
            activeKey={activeKey}
            setActiveKey={setActiveKey}
          />
        )}
        <LayoutWrapper>
          <BodyWrapper {...others}>{children}</BodyWrapper>
        </LayoutWrapper>
      </ContentBody>
    </Wrapper>
  )
}

WrapperContentBody.propTypes = {
  top: PropTypes.element,
  count: PropTypes.array,
  contentBody: PropTypes.string,
  children: PropTypes.node,
  items: PropTypes.array,
  activeKey: PropTypes.any,
  setActiveKey: PropTypes.func
}

export default React.memo(WrapperContentBody)
