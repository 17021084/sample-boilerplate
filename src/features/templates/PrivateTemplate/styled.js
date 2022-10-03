import { ListNotify, Sidebar } from 'molecules'
import { Container, Content, Footer } from 'rsuite'
import styled from 'styled-components'

export const Wrapper = styled(Container)`
  height: 100%;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 480px) {
    display: block;
  }
`

export const LayoutWrapper = styled(Container)`
  display: block;
  max-width: calc(100% - 56px - 200px);
  background-color: ${props => props.theme.colors.gray[1]};
  height: 100%;
  @media screen and (max-width: 480px) {
    height: calc(100vh - 90px);
    max-width: 100%;
  }
  // hide scrollbar
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0;
  }
  scrollbar-width: none;
`
export const BodyWrapper = styled(Content)`
  position: relative;
  height: 100%;
`
export const FooterWrapper = styled(Footer)``
export const SidebarWrapper = styled(Sidebar)``
export const ListNotifyWrapper = styled(ListNotify)``
