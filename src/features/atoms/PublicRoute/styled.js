import { Container, Content, Footer } from 'rsuite'
import styled from 'styled-components'

export const Wrapper = styled(Container)`
  height: 100%;
`

export const BodyWrapper = styled(Content)`
  flex: 1;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
`

export const FooterWrapper = styled(Footer)``
