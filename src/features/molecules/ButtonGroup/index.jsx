import React from 'react'
import { ButtonWrapper, Text, Icon } from './styled'
import PropTypes from 'prop-types'

const ButtonGroup = ({
  label,
  icon,
  color = 'white',
  labelSize = 14,
  iconSize = 18,
  column,
  ...others
}) => {
  const direction = React.useMemo(() => (column ? 'column' : 'row'), [])

  return (
    <ButtonWrapper direction={direction} {...others}>
      {icon && <Icon name={icon} size={iconSize} color={color} />}
      {label && (
        <Text labelSize={labelSize} color={color}>
          {label}
        </Text>
      )}
    </ButtonWrapper>
  )
}

ButtonGroup.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  labelSize: PropTypes.number,
  iconSize: PropTypes.number,
  column: PropTypes.any
}

export default React.memo(ButtonGroup)
