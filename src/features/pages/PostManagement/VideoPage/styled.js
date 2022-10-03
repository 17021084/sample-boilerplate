import {
  BaseButton,
  BaseForm,
  BaseIcon,
  BaseItemGrid,
  BaseWrapper,
  BaseCKEditor
} from 'atoms'
import { FormHeader, InputGroup } from 'molecules'
import { Panel, Container } from 'rsuite'
import styled from 'styled-components'

export const ButtonToolbar = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`

export const WrapperBackButton = styled.div`
  display: block;
  text-align: right;
`

export const Button = styled(BaseButton)``
export const ForgotButton = styled(BaseButton)`
  background-color: ${props => props.theme.colors.transparent};
  border-radius: 4px;
  color: ${props => props.theme.colors.gray[3]};
  padding: 0 0 20px;
`
export const Header = styled(FormHeader)``

export const Form = styled(BaseForm)`
  width: 95%;
  margin: auto;
`
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
  height: calc(100vh - 90px);
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
  scrollbar-width: none;
`
export const CKEditor = styled(BaseCKEditor)`
  min-height: 300px;
`
export const Input = styled(InputGroup)``
