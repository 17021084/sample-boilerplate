import { Loader } from 'rsuite'
import styled from 'styled-components'

export const LoadingWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9999999999999;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LoadingBox = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 15px;
  background: ${props => props.theme.colors.secondary};
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.05);
`
export const LoadingSpinner = styled(Loader)``
