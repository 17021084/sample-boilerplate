import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import React from 'react'
import { Wrapper, Label } from './styled'
import PropTypes from 'prop-types'

const BaseCKEditor = ({ data, onChange, label, ...others }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <CKEditor
        editor={ClassicEditor}
        data={data}
        onChange={(event, editor) => {
          const data = editor.getData()
          if (typeof onChange == 'function') onChange(data)
        }}
        onReady={editor => {
          console.log(editor)
        }}
        locale='vi'
        {...others}
      />
    </Wrapper>
  )
}

BaseCKEditor.propTypes = {
  data: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string
}

export default React.memo(BaseCKEditor)
