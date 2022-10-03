import React from 'react'
import {
  BaseAvatar,
  Title,
  SubTitle,
  WrapperContainer,
  WrapperContent
} from './styled'
import PropTypes from 'prop-types'

const AvatarGroup = ({ source, title, subTitle, ...others }) => {
  return (
    <WrapperContainer {...others}>
      <BaseAvatar src={source || ''} alt={title?.slice(0, 2)} />
      <WrapperContent>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </WrapperContent>
    </WrapperContainer>
  )
}

AvatarGroup.propTypes = {
  source: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string
}

export default React.memo(AvatarGroup)
