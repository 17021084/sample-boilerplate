import { v1CommonVideoList } from 'config/api/Post/Video'
import { withArray, withNull, withNumber } from 'exp-value'
import { useDebounce, useGraphqlQuery } from 'hooks'
import { TableVideoGroup, TopBody } from 'molecules'
import { WrapperContentBody } from 'organisms'
import React, { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Constants, Routers } from 'utils'

const NewsPage = ({ ...others }) => {
  const [listNews, setListNews] = useState([])
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')

  const searchInput = useDebounce(search, 3000)

  const [totalPage, setTotalPage] = useState(1)
  const [totalRecord, setTotalRecord] = useState(1)

  const videoListQuery = useGraphqlQuery(v1CommonVideoList)

  const history = useHistory()
  const createVideo = useCallback(() => {
    history.push(Routers.VIDEO[1])
  }, [])

  const TopTab = React.useCallback(() => {
    return (
      <TopBody
        search={search}
        setSearch={setSearch}
        status={0}
        buttonAction={() => createVideo()}
      />
    )
  }, [search])

  const _renderTableNews = useCallback(() => {
    return (
      <TableVideoGroup
        expData={listNews}
        page={page}
        setPage={setPage}
        totalRecord={totalRecord}
        totalPage={totalPage}
      />
    )
  }, [listNews, page])

  const getListNews = useCallback(
    () =>
      videoListQuery.query({
        variables: {
          filter: {
            title_or_description_matches: `%${searchInput}%`
          },
          page: page
        }
      }),
    [searchInput, page]
  )

  useEffect(() => {
    const r = withArray('data.v1CommonVideoList.edges', videoListQuery)
    const result = r.map(node => {
      return withNull('node', node)
    })
    setListNews(result)

    const meta = withArray('data.v1CommonVideoList.meta', videoListQuery)
    setTotalRecord(withNumber('total_count', meta))
    setTotalPage(withNumber('total_pages', meta))
  }, [videoListQuery.data])

  useEffect(() => {
    getListNews()
  }, [searchInput, page])

  return (
    <WrapperContentBody
      top={TopTab()}
      contentBody={Constants.contentPage[5].title}
      {...others}
    >
      {_renderTableNews()}
    </WrapperContentBody>
  )
}

export default React.memo(NewsPage)
