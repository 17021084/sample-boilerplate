import React, { useCallback, useState } from 'react'
import Resizer from 'react-image-file-resizer'

const useImage = () => {
  const [uri, setUri] = useState(null)

  const getUri = useCallback(uri => setUri(uri), [])

  const resizeImage = React.useCallback(async file => {
    const image = await Resizer.imageFileResizer(
      file,
      1200,
      1200,
      ['BLOB', 'JPEG', 'PNG'],
      70,
      0,
      getUri,
      'file',
      50,
      50
    )

    return image
  }, [])

  return { resizeImage, preview: uri }
}

export default useImage
