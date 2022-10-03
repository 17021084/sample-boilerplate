import styled from 'styled-components'
import { FormGroup, ControlLabel, FormControl, InputGroup, Icon } from 'rsuite'

export const Wrapper = styled(FormGroup)``

export const Label = styled(ControlLabel)``
export const Control = styled(FormControl)`
  border-radius: 4px;
  height: max-content;
  align-item: center;
  padding: 7px 4px;
  text-overflow: ellipsis; /* IE, Safari (WebKit) */
  overflow: hidden; /* don't show excess chars */
  white-space: nowrap;
`
export const Input = styled(InputGroup)`
  overflow: visible;
  display: flex;
  align-items: center;
  border: 1px solid #e5e5ea;
  border-radius: 4px;
  outline: none;
`

export const InputAddon = styled(Input.Addon)`
  display: flex;
  align-items: center;
  width: max-content;
  margin: 0;
  background: ${props =>
    props.children.props.background
      ? props.children.props.background || props.theme.colors.background
      : props.theme.colors.transparent};
`

export const IconContainer = styled(Icon)``
