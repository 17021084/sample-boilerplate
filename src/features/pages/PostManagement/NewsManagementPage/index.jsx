import { v1AdminNewsList } from 'config/api/Post/News'
import { withArray, withNull, withNumber } from 'exp-value'
import { useDebounce, useGraphqlQuery } from 'hooks'
import { TableNewsGroup, TopBody } from 'molecules'
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

  const newsListQuery = useGraphqlQuery(v1AdminNewsList)

  const history = useHistory()
  const createNews = useCallback(() => {
    history.push(Routers.NEWS[1])
  }, [])

  const TopTab = React.useCallback(() => {
    return (
      <TopBody
        search={search}
        setSearch={setSearch}
        status={0}
        buttonAction={() => createNews()}
      />
    )
  }, [search])

  const _renderTableNews = useCallback(() => {
    return (
      <TableNewsGroup
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
      newsListQuery.query({
        variables: {
          filter: {
            title_or_short_description_matches: `%${searchInput}%`
          },
          page: page
        }
      }),
    [searchInput, page]
  )

  useEffect(() => {
    const r = withArray('data.v1CommonNewsList.edges', newsListQuery)
    const result = r.map(node => {
      return withNull('node', node)
    })
    setListNews(result)

    const meta = withArray('data.v1CommonNewsList.meta', newsListQuery)
    setTotalRecord(withNumber('total_count', meta))
    setTotalPage(withNumber('total_pages', meta))
  }, [newsListQuery.data])

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
