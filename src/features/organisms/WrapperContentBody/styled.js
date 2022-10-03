import { Container, Content, Footer } from 'rsuite'
import styled from 'styled-components'
import { BaseNav, BaseText } from 'atoms'

export const Wrapper = styled(Container)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.black};
  padding: 20px;
  @media screen and (max-width: 480px) {
    padding: 0;
  }
`
export const ContentBody = styled(Container)`
  background: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`
export const LayoutWrapper = styled(Container)`
  display: block;
  max-width: 100%;
  height: 100%;
`
export const BodyWrapper = styled(Content)``
export const FooterWrapper = styled(Footer)``
export const Nav = styled(BaseNav)``
export const Text = styled(BaseText)`
  font-size: large;
  font-weight: bold;
  padding: 0 0 10px;
  @media screen and (max-width: 980px) {
    padding: 10px;
    font-size: 12px;
  }
`
