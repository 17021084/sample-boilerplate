import styled from 'styled-components'
import { Container, Content, Footer, Sidebar } from 'rsuite'

export const Wrapper = styled(Container)`
  height: 100%;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 480px) {
    display: block;
  }
`

export const LayoutWrapper = styled(Container)`
  flex-direction: column;
  flex: 1;
  background-color: ${props => props.theme.colors.gray[1]};
`

export const Drawer = styled(Sidebar)``

export const BodyWrapper = styled(Content)`
  position: relative;
`

export const FooterWrapper = styled(Footer)``
