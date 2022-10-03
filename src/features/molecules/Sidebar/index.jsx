import { IMAGES } from 'assets'
import React, { useCallback, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Constants, Routers } from 'utils'
import {
  CardAvatar,
  DropdownItem,
  DropdownWrapper,
  Footer,
  GridItem,
  Header,
  Image,
  Menu,
  MenuBody,
  MenuHeader,
  Navigator,
  NavItem,
  TextLogo,
  WrapperContainer,
  MenuIcon
} from './styled'

const Sidebar = props => {
  const { ...others } = props
  const [expanded, setExpanded] = React.useState(true)
  const [activeKey, setActiveKey] = React.useState('1')
  const [showHeaderMobile, setShowHeaderMobile] = React.useState(false)
  const history = useHistory()
  const location = useLocation()

  const handleResize = useCallback(() => {
    const { innerWidth: width } = window
    setExpanded(width > 1200 || width <= 480)
    setShowHeaderMobile(width <= 480)
  }, [])

  const renderHeaderSidebar = useCallback(() => {
    return !showHeaderMobile ? (
      <MenuHeader>
        <Header>
          <Image source={IMAGES.LOGO.default} />
          <TextLogo>BIDMA</TextLogo>
        </Header>
      </MenuHeader>
    ) : null
  }, [showHeaderMobile])

  const renderMenuSidebar = useCallback(() => {
    return (
      <Navigator>
        {Constants.navigators?.map(item =>
          !item.child ? (
            <NavItem
              eventKey={item.key}
              iconName={item.icon}
              content={item.label}
              activeKey={activeKey}
              setActiveKey={setActiveKey}
              key={item.key}
              onClick={() => history.push(Routers.NAV_LINK[item.key - 1])}
            />
          ) : (
            <DropdownWrapper
              key={item.key}
              eventKey={item.key}
              title={item.label}
              icon={<MenuIcon name={item.icon} />}
            >
              {item.child?.map(child => (
                <DropdownItem
                  eventKey={child.key}
                  key={child.key}
                  active={activeKey == eval(child.key)}
                  onSelect={e => {
                    history.push(Routers.NAV_LINK[eval(e - 1)])
                    setActiveKey(e)
                  }}
                >
                  {child.label}
                </DropdownItem>
              ))}
            </DropdownWrapper>
          )
        )}
      </Navigator>
    )
  }, [activeKey])

  const renderAvatar = useCallback(() => {
    return (
      <Footer>
        <CardAvatar
          source={IMAGES.AVATAR.default}
          title='linhho'
          subTitle='supper admin'
          alt='supper admin'
        />
      </Footer>
    )
  }, [])

  // handleActiveMenu
  useEffect(() => {
    let currentLink = Routers.NAV_LINK.indexOf(location.pathname)
    if (currentLink >= 0) setActiveKey((currentLink + 1).toString())
  }, [location])

  useEffect(handleResize, [])
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <GridItem md={1} sm={1} lg={4}>
      <WrapperContainer expanded={expanded}>
        <Menu
          {...others}
          expanded={expanded}
          defaultOpenKeys={['1', '2', '3', '4', '5']}
        >
          {renderHeaderSidebar()}
          <MenuBody>
            {renderMenuSidebar()}
            {renderAvatar()}
          </MenuBody>
        </Menu>
      </WrapperContainer>
    </GridItem>
  )
}

export default React.memo(Sidebar)
