import { BaseButton, BaseForm, BaseIcon, BaseWrapper } from 'atoms'
import { InputGroup, FormHeader, ButtonGroup } from 'molecules'
import { Container } from 'rsuite'
import styled from 'styled-components'

export const ButtonToolbar = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`
export const Input = styled(InputGroup)``
export const Button = styled(BaseButton)``
export const Form = styled(BaseForm)``
export const LayoutWrapper = styled(Container)`
  flex-direction: column;
`
export const Icon = styled(BaseIcon)`
  width: 20px;
`
export const Header = styled(FormHeader)``
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
