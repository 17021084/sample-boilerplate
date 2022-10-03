import styled from 'styled-components'
import { BaseText, BaseAuction, BaseButton } from 'atoms'
import { Container } from 'rsuite'

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  border: 1px solid ${props => props.theme.colors.gray[5]};
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
`
export const Text = styled(BaseText)``

export const WrapperLeft = styled(Container)`
  width: 60%;
`
export const WrapperRight = styled(Container)`
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
export const FieldAuction = styled(BaseAuction)``
export const Button = styled(BaseButton)``
