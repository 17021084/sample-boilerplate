import { IMAGES } from 'assets'
import React from 'react'
import {
  Image,
  LogoWrapper,
  SubTitle,
  SubTitleWrapper,
  Title,
  Wrapper,
  TitleWrapper
} from './styled'
import PropTypes from 'prop-types'

const FormHeader = ({ title, subTitle, ...others }) => {
  return (
    <Wrapper column {...others}>
      <LogoWrapper>
        <Image source={IMAGES.LOGO.default} />
      </LogoWrapper>
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>

      <SubTitleWrapper>
        <SubTitle>{subTitle}</SubTitle>
      </SubTitleWrapper>
    </Wrapper>
  )
}

FormHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
}

export default React.memo(FormHeader)
