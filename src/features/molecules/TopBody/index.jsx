import PropTypes from 'prop-types'
import React from 'react'
import { Button, Form, Icon, Input, Wrapper } from './styled'

const TopBody = ({ search, setSearch, status, buttonAction, ...others }) => {
  return (
    <Wrapper {...others}>
      <Form fluid>
        <Input
          value={search}
          onChange={e => setSearch(e)}
          placeholder={
            status === 1
              ? 'Tìm kiếm bằng tên, số điện thoại, email...'
              : 'Tìm kiếm bằng tiêu đề, mô tả...'
          }
          name={'search'}
          rightIcon={<Icon name={'feather-search'} />}
        />
      </Form>
      <Button onClick={buttonAction}>THÊM MỚI</Button>
    </Wrapper>
  )
}

TopBody.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
  status: PropTypes.number,
  buttonAction: PropTypes.func
}

export default React.memo(TopBody)
