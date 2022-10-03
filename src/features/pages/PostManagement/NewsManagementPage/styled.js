import { BaseButton, BaseText, BaseWrapper } from 'atoms'
import styled from 'styled-components'

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
