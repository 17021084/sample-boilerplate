import {
  BaseButton,
  BaseForm,
  BaseIcon,
  BaseItemGrid,
  BaseWrapper,
  BaseImage,
  BaseUploader,
  BaseText,
  Loading
} from 'atoms'

import { Panel, Container } from 'rsuite'
import styled from 'styled-components'

export const Button = styled(BaseButton)`
  width: 50%;
`

export const Form = styled(BaseForm)``
export const GridItem = styled(BaseItemGrid)``
export const Icon = styled(BaseIcon)`
  width: 20px;
`

export const PanelWrapper = styled(Panel)`
  background: ${props => props.theme.colors.white};
  height: auto;
`
export const LayoutWrapper = styled(Container)`
  flex-direction: column;
  max-width: 480px;
  margin: auto;
  width: 95%;
`

export const Wrapper = styled(BaseWrapper)`
  text-align: center;
  margin: 40px auto;
`

export const WrapperAvatar = styled(BaseWrapper)`
  margin: 30px auto;
  position: relative;
  text-align: center;
  width: 200px;
`
export const ImageAvatar = styled(BaseImage)`
  max-width: 200px;
  max-height: 200px;
  height: fit-content;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.colors.gray[1]};
`
export const Uploader = styled(BaseUploader)`
  position: absolute;
  bottom: 0;
  right: 0;
`
export const IconAvatar = styled(BaseIcon)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px !important;
  color: #000 !important;
`
export const Title = styled(BaseText)`
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
`
export const WrapperLoading = styled(Loading)``
