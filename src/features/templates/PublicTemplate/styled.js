import { BaseItemGrid, BaseWrapper } from 'atoms'
import { ButtonGroup } from 'molecules'
import { Container, Content } from 'rsuite'
import styled from 'styled-components'

export const BodyWrapper = styled(Content)`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const GridItem = styled(BaseItemGrid)`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled(BaseWrapper)`
  background: ${props => props.theme.colors.white};
  height: auto;
  align-items: center;
  padding: 20px;
`
export const FooterWrapper = styled(BaseWrapper)`
  margin-top: 15px;
`
export const BackButton = styled(ButtonGroup)`
  background-color: ${props => props.theme.colors.transparent};
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px !important;
`
export const WrapperContainer = styled(Container)`
  width: 100%;
  height: 100vh;
  flex: 1;
  background: ${props => props.theme.colors.background};
  padding: 40px 20px;
`
