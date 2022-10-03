import React, { useState, useCallback } from 'react'
import {
  MenuHeader,
  MenuIcon,
  Header,
  Image,
  TextLogo,
  WrapperBadge,
  WrapperIcon
} from './styled'
import { IMAGES } from 'assets'
import { ListNotify, Sidebar } from 'molecules'
import PropTypes from 'prop-types'

const HeaderGroup = ({ countNotify, setCountNotify }) => {
  const [showDropdownNotify, setShowDropdownNotify] = useState(false)
  const [showDropdownSidebar, setShowDropdownSidebar] = useState(false)
  const onToggleNotify = useCallback(() => {
    setShowDropdownNotify(!showDropdownNotify)
    setShowDropdownSidebar(false)
  }, [showDropdownNotify])
  const onToggleSidebar = useCallback(() => {
    setShowDropdownSidebar(!showDropdownSidebar)
    setShowDropdownNotify(false)
  }, [showDropdownSidebar])
  return (
    <>
      <MenuHeader>
        <WrapperIcon left={20} onClick={() => onToggleSidebar()}>
          {!showDropdownSidebar ? (
            <MenuIcon name={'feather-menu'} />
          ) : (
            <MenuIcon name={'feather-x'} />
          )}
        </WrapperIcon>

        <Header>
          <Image source={IMAGES.LOGO.default} />
          <TextLogo>BIDMA</TextLogo>
        </Header>

        <WrapperIcon right={20} onClick={() => onToggleNotify()}>
          {!showDropdownNotify ? (
            <>
              <MenuIcon name={'feather-bell'} />
              {countNotify > 0 && (
                <WrapperBadge
                  className={'count-notify'}
                  content={countNotify}
                />
              )}
            </>
          ) : (
            <MenuIcon name={'feather-x'} />
          )}
        </WrapperIcon>
      </MenuHeader>

      {showDropdownNotify && (
        <ListNotify countNotify={countNotify} setCountNotify={setCountNotify} />
      )}
      {showDropdownSidebar && <Sidebar />}
    </>
  )
}

HeaderGroup.propTypes = {
  countNotify: PropTypes.number,
  setCountNotify: PropTypes.func
}

export default React.memo(HeaderGroup)
