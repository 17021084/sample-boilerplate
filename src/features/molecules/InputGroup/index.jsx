import React from 'react'
import { Wrapper, Label, Control, Input, InputAddon } from './styled'
import PropTypes from 'prop-types'

const InputGroup = ({
  label,
  name,
  value,
  onChange,
  accepter,
  leftIcon,
  rightIcon,
  placeholder,
  ...rest
}) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input>
        {leftIcon ? <InputAddon>{leftIcon}</InputAddon> : null}
        <Control
          name={name}
          value={value}
          onChange={onChange}
          accepter={accepter}
          placeholder={placeholder}
          {...rest}
        />
        {rightIcon ? <InputAddon>{rightIcon}</InputAddon> : null}
      </Input>
    </Wrapper>
  )
}

InputGroup.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  accepter: PropTypes.object,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  placeholder: PropTypes.string
}

export default React.memo(InputGroup)
