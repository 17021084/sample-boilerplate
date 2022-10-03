import { BaseDropdown, BaseImage, BaseText } from 'atoms'
import { Avatar, Container } from 'rsuite'
import styled from 'styled-components'

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: row;
  border: 1px solid ${props => props.theme.colors.gray[5]};
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
`
export const AvatarGroup = styled(Avatar)``
export const WrapperAvatar = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  p {
    margin-left: 10px;
    color: ${props => props.theme.colors.blue};
  }
`
export const Text = styled(BaseText)``

export const TextLink = styled(BaseText)`
  color: ${props => props.theme.colors.blue};
  font-size: 14px;
  font-weight: bold;
  margin-left: 10px;
`
export const WrapperContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 10px;
`
export const WrapperBlock = styled(Container)`
  margin-left: 10px;
`
export const WrapperLeft = styled(Container)`
  width: 60%;
`
export const WrapperRight = styled(Container)`
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
export const Image = styled(BaseImage)`
  min-width: 50px;
  max-width: 80px;
  border-radius: 5px;
  object-fit: cover;
`
export const WrapperTime = styled.span`
  background: ${props => props.theme.colors.background};
  padding: 5px;
  border-radius: 4px;
  margin: 5px 0;
  width: fit-content;
`
export const DropdownStatus = styled(BaseDropdown)`
  .rs-dropdown-toggle {
    background: ${props => props.theme.colors.background};
    padding: 5px 30px 5px 10px;
    .rs-dropdown-toggle-caret {
      top: unset;
    }
  }
`

export const WrapperContent = styled(Container)`
  align-items: flex-end;
  justify-content: space-between;
`
