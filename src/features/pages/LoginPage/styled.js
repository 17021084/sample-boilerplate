import {
  BaseButton,
  BaseForm,
  BaseIcon,
  BaseItemGrid,
  BaseWrapper
} from 'atoms'
import { FormHeader } from 'molecules'
import { Panel, Container } from 'rsuite'
import styled from 'styled-components'

export const ButtonToolbar = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`

export const Button = styled(BaseButton)``
export const ForgotButton = styled(BaseButton)`
  background-color: ${props => props.theme.colors.transparent};
  border-radius: 4px;
  color: ${props => props.theme.colors.gray[3]};
  padding: 0 0 20px;
`
export const Header = styled(FormHeader)``

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
