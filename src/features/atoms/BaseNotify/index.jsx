import React from 'react'
import { TextContent, TextLink, TextTime, TextTitle, Wrapper } from './styled'

const BaseNotify = ({ notify }) => {
  const { title, message, created_at, status } = notify.node

  const notifyDefault = React.useMemo(
    () => (
      <Wrapper status={status == 'unread'}>
        <TextTitle className={'title'}>{title}</TextTitle>
        <TextContent>
          {message + ' '}
          <TextLink appearance='link'>{created_at.toDateTime()}</TextLink>
        </TextContent>
        <TextTime>{created_at.timeAgo()}</TextTime>
      </Wrapper>
    ),
    [notify]
  )

  return notifyDefault
}

export default React.memo(BaseNotify)
