import {
  BaseCell,
  BaseCheckbox,
  BaseColumn,
  BaseContainer,
  BaseImage,
  BaseText,
  BaseTable,
  BaseIcon,
  BaseLink,
  BaseDropdown,
  BaseModal
} from 'atoms'
import styled from 'styled-components'
import { Table, IconButton } from 'rsuite'
import FormCustomer from '../FormCustomer'

export const Wrapper = styled(BaseContainer)`
  max-height: calc(100vh - 150px);
  @media screen and (max-width: 980px) {
    margin: 10px;
  }
`
export const Image = styled(BaseImage)``
export const Text = styled(BaseText)``
export const TextNoData = styled(BaseText)`
  top: 45%;
  left: 45%;
  position: absolute;
`
export const Cell = styled(BaseCell)`
  line-height: 30px;
`
export const Column = styled(BaseColumn)``
export const Checkbox = styled(BaseCheckbox)``
export const WrapperImageCell = styled(BaseCell)`
  img {
    object-fit: cover;
    width: 100%;
    border-radius: 50%;
    height: 40px;
  }
`
export const TextCell = styled(BaseCell)``
export const WrapperTable = styled(BaseTable)``
export const WrapperPagination = styled(Table.Pagination)``
export const Icon = styled(BaseIcon)`
  overflow: hidden;
  left: 5px;
  position: absolute;
  top: 5px;
  right: 5px;
  bottom: 10px;
`
export const WrapperIcon = styled.div`
  justify-content: space-around;
  display: flex;
  align-items: center;
`
export const WrapperIconButton = styled(IconButton)``
export const Header = styled(Table.HeaderCell)`
  .rs-checkbox {
    margin: unset;
    .rs-checkbox-wrapper {
      top: 2px;
    }
  }
  text-align: center;
  line-height: 30px;
`
export const Link = styled(BaseLink)``
export const Dropdown = styled(BaseDropdown)``
export const Modal = styled(BaseModal)`
  max-width: 760px;
`
export const FormEdit = styled(FormCustomer)``
