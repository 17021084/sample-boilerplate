import { v1CommonVideo } from 'config/api/Post/Video'
import { withArray, withNull, withNumber } from 'exp-value'
import { useGraphqlQuery } from 'hooks'
import React, { useCallback, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import WrapperContentBody from '../../../organisms/WrapperContentBody'
import {
  Button,
  ButtonToolbar,
  CKEditor,
  ForgotButton,
  Form,
  Input,
  LayoutWrapper,
  WrapperBackButton
} from './styled'
import { videoModel } from './validation'

const VideoPage = () => {
  const history = useHistory()
  const { search } = useLocation()

  const videoDetail = useGraphqlQuery(v1CommonVideo)

  const [data, setData] = useState({
    title: '',
    description: '',
    vote: '',
    content: ''
  })
  const [idVideo, setIdVideo] = useState(null)

  const getID = useCallback(() => {
    setIdVideo(new URLSearchParams(search).get('id'))
  }, [search])

  const getVideoDetail = useCallback(() => {
    if (!idVideo) return
    videoDetail.query({
      variables: {
        id: idVideo
      }
    })
  }, [idVideo])

  const _handleChangeDataVideo = field => value => {
    setData({
      ...data,
      [field]: value
    })
  }

  const _renderData = useCallback(
    r => {
      console.log(r)
      setData({
        title: withNull('title', r),
        description: withNull('short_description', r),
        content: withNull('html_content', r),
        vote: withNull('votes_total', r),
        coverUrl: withNull('cover_url', r),
        commentCount: withNull('comments_count', r),
        commentTotal: withNull('comments_total', r),
        status: withNull('status', r),
        contentUrl: withNull('content_url', r)
      })
    },
    [data]
  )

  const onSubmit = useCallback(() => {
    console.log(data)
  }, [data])

  const goBack = useCallback(() => history.goBack(), [])

  useEffect(() => {
    const r = withArray('data.v1CommonNews', videoDetail)
    console.log(r)
    if (withNumber('length', r) == 0) return
    _renderData(r)
  }, [videoDetail.data])

  useEffect(getID, [search])
  useEffect(getVideoDetail, [idVideo])

  return (
    <WrapperContentBody contentBody={'Chỉnh sửa thông tin video'}>
      <LayoutWrapper>
        <WrapperBackButton>
          <Button type={'submit'} onClick={goBack}>
            Trở lại
          </Button>
        </WrapperBackButton>

        <Form fluid model={videoModel}>
          <CKEditor
            data={data.content}
            onChange={_handleChangeDataVideo('content')}
            name={'content'}
            placeholder={'Nhập nội dung bài viết ...'}
            label={'Soạn nội dung cho bài viết'}
          />

          <Input
            value={data.title}
            onChange={_handleChangeDataVideo('title')}
            label={'Tiêu đề'}
            componentClass='textarea'
            rows={3}
            placeholder={'Tiêu đề'}
            name={'title'}
          />

          <Input
            componentClass='textarea'
            rows={3}
            value={data.description}
            onChange={_handleChangeDataVideo('description')}
            label={'Mô tả'}
            placeholder={'Mô tả'}
            name={'description'}
          />

          <Input
            value={data.vote}
            onChange={_handleChangeDataVideo('vote')}
            label={'Lượt bình chọn'}
            placeholder={'Lượt bình chọn'}
            type='number'
            name={'vote'}
          />

          <ButtonToolbar>
            <ForgotButton appearance='link' onClick={goBack}>
              Hủy
            </ForgotButton>
            <Button type={'submit'} onClick={onSubmit}>
              Cập nhật
            </Button>
          </ButtonToolbar>
        </Form>
      </LayoutWrapper>
    </WrapperContentBody>
  )
}

export default React.memo(VideoPage)
