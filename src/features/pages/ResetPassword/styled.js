import styled from 'styled-components'
import { Panel, Container } from 'rsuite'
import { FormHeader } from 'molecules'
import {
  BaseButton,
  BaseForm,
  BaseItemGrid,
  BaseWrapper,
  BaseIcon
} from 'atoms'

export const ButtonToolbar = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`

export const Button = styled(BaseButton)`
  background-color: ${props => props.theme.colors.primary};
  border-radius: 4px;
  width: 50%;
`
export const ForgotButton = styled(BaseButton)`
  background-color: ${props => props.theme.colors.transparent};
  border-radius: 4px;
  color: ${props => props.theme.colors.gray[3]};
  padding: 0 0 20px;
`

export const Form = styled(BaseForm)``
export const GridItem = styled(BaseItemGrid)``
export const Wrapper = styled(BaseWrapper)``
export const Icon = styled(BaseIcon)`
  width: 20px;
`
export const PanelWrapper = styled(Panel)`
  background: ${props => props.theme.colors.white};
  height: auto;
`
export const LayoutWrapper = styled(Container)`
  flex-direction: column;
`
export const Header = styled(FormHeader)``
