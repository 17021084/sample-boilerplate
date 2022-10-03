import { v1AdminNews } from 'config/api/Post/News'
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
import { newsModel } from './validation'

const NewsPage = () => {
  const history = useHistory()
  const { search } = useLocation()

  const newsDetail = useGraphqlQuery(v1AdminNews)

  const [data, setData] = useState({
    title: '',
    description: '',
    vote: '',
    content: ''
  })
  const [idNews, setIdNews] = useState(null)

  const getID = useCallback(() => {
    setIdNews(new URLSearchParams(search).get('id'))
  }, [search])

  const getNewsDetail = useCallback(() => {
    if (!idNews) return
    newsDetail.query({
      variables: {
        id: idNews
      }
    })
  }, [idNews])

  const _handleChangeDataNews = field => value => {
    setData({
      ...data,
      [field]: value
    })
  }

  const _renderData = useCallback(
    r => {
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
    const r = withArray('data', newsDetail)
    console.log(r)
    if (withNumber('length', r) == 0) return
    _renderData(r)
  }, [newsDetail.data])

  useEffect(getID, [search])
  useEffect(getNewsDetail, [idNews])

  return (
    <WrapperContentBody contentBody={'Chỉnh sửa tin tức'}>
      <LayoutWrapper>
        <WrapperBackButton>
          <Button type={'submit'} onClick={goBack}>
            Trở lại
          </Button>
        </WrapperBackButton>

        <Form fluid model={newsModel}>
          <CKEditor
            data={data.content}
            onChange={_handleChangeDataNews('content')}
            name={'content'}
            placeholder={'Nhập nội dung bài viết ...'}
            label={'Soạn nội dung cho bài viết'}
            id={'form-news'}
          />

          <Input
            value={data.title}
            onChange={_handleChangeDataNews('title')}
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
            onChange={_handleChangeDataNews('description')}
            label={'Mô tả'}
            placeholder={'Mô tả'}
            name={'description'}
          />

          <Input
            value={data.vote}
            onChange={_handleChangeDataNews('vote')}
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

export default React.memo(NewsPage)
