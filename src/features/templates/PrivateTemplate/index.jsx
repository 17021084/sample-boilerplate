import { Header } from 'organisms'
import React, { useState, useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { useToken } from 'hooks'
import { Routers } from 'utils'
import {
  BodyWrapper,
  LayoutWrapper,
  ListNotifyWrapper,
  SidebarWrapper,
  Wrapper
} from './styled'
import PropTypes from 'prop-types'

const PrivateTemplate = ({ children, ...others }) => {
  const history = useHistory()
  const { isLoggedIn } = useToken()
  const [showInMobile, setShowInMobile] = useState(false)
  // xử lý đếm thông báo
  const [countNotify, setCountNotify] = useState(0)

  const handleResize = useCallback(() => {
    setShowInMobile(window.innerWidth <= 480)
  }, [window])

  useEffect(handleResize, [])
  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (!isLoggedIn) history.push(Routers.SIGN_IN_PAGE)
  }, [isLoggedIn])

  return (
    <Wrapper className='show-container'>
      {!showInMobile && <SidebarWrapper />}
      {showInMobile && (
        <Header countNotify={countNotify} setCountNotify={setCountNotify} />
      )}
      <LayoutWrapper>
        <BodyWrapper {...others}>{children}</BodyWrapper>
      </LayoutWrapper>
      {!showInMobile && (
        <ListNotifyWrapper
          countNotify={countNotify}
          setCountNotify={setCountNotify}
        />
      )}
    </Wrapper>
  )
}

PrivateTemplate.propTypes = {
  children: PropTypes.any
}

export default React.memo(PrivateTemplate)
