import BaseText from '../BaseText'
import { Container } from 'rsuite'
import styled from 'styled-components'

export const Wrapper = styled(Container)`
  display: flex;
  border-bottom: 1px solid ${props => props.theme.colors.gray[5]};
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
`
export const Text = styled(BaseText)``

export const WrapperLeft = styled(Container)``
export const WrapperRight = styled(Container)`
  text-align: right;
`
