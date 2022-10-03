import React from 'react'
import { WrapperNav, ContentItem, NavItem } from './styled'
import PropTypes from 'prop-types'

const BaseNav = ({ count, activeKey, setActiveKey, items, ...others }) => {
  const _renderItem = React.useCallback(() => {
    return items?.map((item, index) => (
      <NavItem
        key={index + 1}
        active={eval(activeKey) == index + 1}
        onClick={() => setActiveKey(index + 1)}
      >
        <ContentItem>{`${item} (${count[index] || 0})`}</ContentItem>
      </NavItem>
    ))
  }, [items, activeKey, count])

  return (
    <WrapperNav appearance='subtle' {...others}>
      {_renderItem()}
    </WrapperNav>
  )
}

BaseNav.propTypes = {
  items: PropTypes.array.isRequired,
  count: PropTypes.array,
  activeKey: PropTypes.any.isRequired,
  setActiveKey: PropTypes.func
}

export default React.memo(BaseNav)
