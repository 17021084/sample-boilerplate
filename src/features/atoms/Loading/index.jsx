import React from 'react'
import { LoadingSpinner, LoadingBox, LoadingWrapper } from './styled'

const Loading = () => {
  return (
    <LoadingWrapper>
      <LoadingBox>
        <LoadingSpinner backdrop />
      </LoadingBox>
    </LoadingWrapper>
  )
}

export default React.memo(Loading)
