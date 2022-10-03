import styled from 'styled-components'
import { Button } from 'rsuite'

export const Wrapper = styled(Button)`
  background-color: ${props => props.theme.colors.primary};
  border-radius: 4px;
  color: ${props => props.theme.colors.white};
`
