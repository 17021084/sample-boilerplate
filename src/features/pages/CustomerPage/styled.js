import { BaseButton, BaseText, BaseWrapper, BaseModal } from 'atoms'
import styled from 'styled-components'
import { FormCustomer } from 'molecules'

export const Wrapper = styled(BaseWrapper)`
  height: auto;
  display: block;
`
export const Text = styled(BaseText)`
  color: ${props => props.theme.colors.gray[1]};
`
export const Button = styled(BaseButton)`
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px;
  border-radius: 4px;
`
export const Modal = styled(BaseModal)`
  max-width: 760px;
`
export const FormAddCustomer = styled(FormCustomer)``
