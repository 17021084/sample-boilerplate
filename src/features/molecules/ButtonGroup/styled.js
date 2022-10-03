import styled from 'styled-components'
import { BaseButton, BaseIcon, BaseText } from 'atoms'

export const ButtonWrapper = styled(BaseButton)`
  display: flex;
  flex-direction: ${props => props.direction};
`
export const Icon = styled(BaseIcon)`
  font-size: ${props => (props.iconSize ? props.iconSize : 18)}px;
  color: ${props => (props.color ? props.theme.colors.white : props.color)};
`
export const Text = styled(BaseText)`
  font-size: ${props => (props.labelSize ? props.labelSize : 14)}px;
  color: ${props => (props.color ? props.color : props.theme.colors.white)};
`
