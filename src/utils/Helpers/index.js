import React, { useCallback, useState } from 'react'
import Resizer from 'react-image-file-resizer'

const Helpers = () => {
  const [uri, setUri] = useState(null)

  const getUri = useCallback(uri => setUri(uri), [])

  const resizeImage = React.useCallback(async file => {
    Resizer.imageFileResizer(
      file,
      1200,
      1200,
      'JPEG',
      70,
      0,
      getUri,
      'file',
      50,
      50
    )
  }, [])

  return { resizeImage, preview: uri }
}

export default Helpers
