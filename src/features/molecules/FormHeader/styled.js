import { BaseImage, BaseText, BaseWrapper } from 'atoms'
import styled from 'styled-components'
export const Wrapper = styled(BaseWrapper)`
  flex: 1;
  align-items: center;
  display: flex;
  padding-vertical: 15px;
  width: 100%;
`

export const Title = styled.p`
  color: ${props => props.theme.colors.primary};
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`
export const SubTitle = styled(BaseText)`
  color: ${props => props.theme.colors.gray[1]};
  font-size: 18px;
  font-weight: bold;
  padding: 10px 0 15px;
`

export const LogoWrapper = styled(BaseWrapper)``
export const TitleWrapper = styled(BaseWrapper)``
export const Image = styled(BaseImage)``
export const SubTitleWrapper = styled(BaseWrapper)`
  margin-top: 20px;
  width: 100%;
`
