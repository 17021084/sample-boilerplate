import styled from 'styled-components'
import { Uploader } from 'rsuite'

export const Wrapper = styled.div`
  flex: 1;
  flex-direction: ${props => props.direction};
`

export const WrapperUploader = styled(Uploader)``
