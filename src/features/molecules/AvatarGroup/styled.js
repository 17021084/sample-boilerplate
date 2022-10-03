import styled from 'styled-components'
import { Avatar } from 'rsuite'

export const BaseAvatar = styled(Avatar)`
  border-radius: 50%;
  max-width: 50px;
  @media screen and (max-width: 1200px) and (min-width: 480px) {
    padding: 5px;
    margin: auto;
  }
`
export const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
`
export const SubTitle = styled.div`
  font-weight: normal;
  font-size: 14px;
`
export const WrapperContainer = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  width: 100%;
  border: 1px solid  ${props => props.theme.colors.gray[5]};
  padding: 10px;
  @media screen and (max-width: 1200px) and (min-width: 480px) {
    padding: 0;
    border: unset;
  }
`
export const WrapperContent = styled.div`
  display: block;
  margin-left: 10px;
  @media screen and (max-width: 1200px) and (min-width: 480px) {
    display: none;
  }
`
