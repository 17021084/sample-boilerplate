import {
  v1AdminBookingList,
  v1AdminBookingSummary,
  v1AdminBooking,
  v1AdminUpdateBooking
} from 'config/api/Timeline'
import {
  withArray,
  withBoolean,
  withEmpty,
  withNull,
  withNumber,
  withUnique
} from 'exp-value'
import { useGraphqlQuery, useGraphqlMutation } from 'hooks'
import { WrapperContentBody } from 'organisms'
import React, { useCallback, useEffect, useMemo, useState, useRef } from 'react'
import { Constants } from 'utils'
import {
  AuctionInfo,
  Timeline,
  TimelineItem,
  WrapperLoading,
  Wrapper,
  Modal,
  Auction
} from './styled'

const AppointmentSchedule = ({ ...others }) => {
  // state of top tab
  const [activeKeyNav, setActiveKeyNav] = useState('1')

  const [bookingList, setBookingList] = useState([])
  const [countBooking, setCountBooking] = useState([0, 0, 0, 0, 0])

  const [isLoading, setIsLoading] = useState(false)

  const [page, setPage] = useState(1)
  const [nextPage, setNextPage] = useState(1)
  const [typeBooking, setTypeBooking] = useState('')

  const [showModal, setShowModal] = useState(false)
  const [idAuction, setIdAuction] = useState(null)
  const [currentAuction, setCurrentAuction] = useState(null)
  const [reload, setReload] = useState(true)

  const listItem = useRef()

  const bookingListQuery = useGraphqlQuery(v1AdminBookingList)
  const bookingSummary = useGraphqlQuery(v1AdminBookingSummary)
  const bookingDetail = useGraphqlQuery(v1AdminBooking)
  const updateBooking = useGraphqlMutation(v1AdminUpdateBooking)

  const contentTab = useMemo(() => {
    return Constants.auctionsStatus.map(obj => obj.content)
  }, [])

  const dataTimeline = useMemo(() => {
    const group = {}
    bookingList?.forEach(auction => {
      const item = withNull('node', auction)
      group[withEmpty('booking_at', item).toDate()] = (
        group[withEmpty('booking_at', item).toDate()] || []
      ).concat(item)
    })
    return Object.entries(group)
  }, [bookingList])

  const countingBookingType = useCallback(
    types => {
      const temp = types.map(type => withNumber('node.bookings_total', type))
      temp.unshift(temp.reduce((total, num) => total + num, 0))
      setCountBooking(temp)
    },
    [countBooking]
  )

  // active top tab
  const onSelect = useCallback(
    e => {
      if (e > 1) setTypeBooking(Constants.auctionsStatus[e - 1].code)
      else setTypeBooking('')
      setPage(1)
      setNextPage(1)
      setBookingList([])
      setActiveKeyNav(e)
    },
    [activeKeyNav]
  )

  // change status actions
  const changeStatus = useCallback(
    e => {
      const status = Object.keys(Constants.dropdownStatus).find(
        key => Constants.dropdownStatus[key] === e
      )
      setCurrentAuction({
        ...currentAuction,
        status: status
      })
      if (idAuction) {
        setStatusBooking(status, idAuction)
        setReload(true)
      }
      setShowModal(false)
    },
    [currentAuction, idAuction]
  )

  // Handle show modal auction detail
  const handleShowModal = useCallback(id => {
    setIdAuction(id)
    setShowModal(true)
  }, [])

  const hideModal = useCallback(() => {
    setShowModal(false)
    setIdAuction(null)
    setCurrentAuction(null)
  }, [])

  const _renderModalAuction = useCallback(
    auction => {
      const expData = {
        avatarUrl: withEmpty('user.avatar_url', auction),
        name: withEmpty('user.full_name', auction),
        title: withEmpty('name', auction),
        nameAuction: withEmpty('auction_item.auction_name', auction),
        auction_image: withEmpty('auction_item.thumb_url', auction),
        time:
          withEmpty('booking_at', auction).toDateTime() +
          ' - ' +
          withEmpty('booking_end', auction).toDateTime(),
        activeKey: withEmpty('status', auction),
        statusOnline: withEmpty('booking_type', auction),
        currentTime: withEmpty('booking_at', auction).toDateTime(),
        countdown: withEmpty('booking_at', auction),

        auction_name: withEmpty('auction_item.auction_name', auction),
        year_of_manufacture: String.prototype.utcToLocalDate(
          withEmpty('auction_item.year_of_manufacture', auction),
          'YYYY'
        ),
        used_hours: withEmpty('auction_item.used_hours', auction),
        address: withEmpty('auction_item.address', auction),
        min_price: withEmpty('auction_item.min_price', auction)
      }
      return (
        <Modal
          show={showModal}
          onHide={hideModal}
          body={<Auction data={expData} changeStatus={changeStatus} />}
        />
      )
    },
    [showModal, currentAuction]
  )

  const groupAuctionItem = useCallback(
    auctions => setBookingList(withUnique([...bookingList, ...auctions])),
    [bookingList]
  )

  const getBookingList = useCallback(
    () =>
      bookingListQuery.query({
        variables: {
          filter: {
            status_eq: typeBooking
          },
          page: page
        }
      }),
    [typeBooking, page]
  )

  const getCountingBooking = useCallback(() => bookingSummary.query({}), [])

  const getBookingDetail = useCallback(() => {
    bookingDetail.query({
      variables: {
        id: idAuction
      }
    })
  }, [idAuction])

  const setStatusBooking = useCallback((status, id) => {
    updateBooking.mutate({
      variables: {
        input: {
          attribute: {
            status: status
          },
          id: id
        }
      }
    })
  }, [])

  const scrollLoadMore = useCallback(() => {
    if (
      listItem.current.clientHeight + listItem.current.scrollTop ===
      listItem.current.scrollHeight
    ) {
      if (nextPage) setPage(nextPage)
    }
  }, [nextPage])

  const _renderTimeline = useCallback(() => {
    if (isLoading && page == 1) return <WrapperLoading />
    if (!withNull('length', dataTimeline)) return null

    return dataTimeline.map((booking, index) => {
      if (withNull('length', booking))
        return (
          <TimelineItem
            title={booking[0]}
            key={index}
            active={withEmpty('booking_at', booking[1][0]).isAfter()}
          >
            {withNull('length', booking[1]) &&
              booking[1].map((item, key) => {
                return (
                  <AuctionInfo
                    avatarUrl={withEmpty('user.avatar_url', item)}
                    name={withEmpty('user.full_name', item)}
                    title={withEmpty('name', item)}
                    nameAuction={withEmpty('auction.name', item)}
                    auction_image={withArray('auction_item.images', item)[0]}
                    time={
                      withEmpty('auction.started_at', item).toDateTime() +
                      ' - ' +
                      withEmpty('auction.ended_at', item).toDateTime()
                    }
                    activeKey={withEmpty('status', item)}
                    changeStatus={changeStatus}
                    statusOnline={withEmpty('booking_type', item)}
                    currentTime={withEmpty('booking_at', item).toDateTime()}
                    countdown={withEmpty('booking_at', item)}
                    key={key}
                    onClick={() => handleShowModal(withEmpty('id', item))}
                  />
                )
              })}
          </TimelineItem>
        )
    })
  }, [bookingList, reload])

  const _renderIconLoadMore = useCallback(() => {
    if (isLoading && page != 1)
      return (
        <Wrapper>
          <WrapperLoading />
        </Wrapper>
      )
  }, [isLoading, page])

  useEffect(() => {
    const r = withArray('data.v1AdminBookingList.edges', bookingListQuery)
    groupAuctionItem(r)
    const meta = withNull('data.v1AdminBookingList.meta', bookingListQuery)
    setIsLoading(withBoolean('isLoading', bookingListQuery))

    if (!meta || !meta.next_page) {
      setNextPage(null)
      return
    }
    setNextPage(withNumber('next_page', meta))
  }, [bookingListQuery.data])

  useEffect(() => {
    const r = withArray('data.v1AdminBookingSummary.edges', bookingSummary)
    countingBookingType(r)
  }, [bookingSummary.data])

  useEffect(() => {
    const r = withArray('data.v1AdminBooking', bookingDetail)
    setCurrentAuction(r)
  }, [bookingDetail.data])

  useEffect(() => {
    if (nextPage) getBookingList()
  }, [activeKeyNav, page, typeBooking])

  useEffect(() => {
    listItem.current = document.getElementById('Wrapper_timeline')
  }, [])

  useEffect(() => {
    if (reload) {
      getCountingBooking()
      setReload(false)
    }
  }, [reload])

  useEffect(() => {
    if (showModal && idAuction) getBookingDetail()
  }, [showModal, idAuction])

  return (
    <WrapperContentBody
      contentBody={Constants.contentPage[3].title}
      items={contentTab}
      count={countBooking}
      activeKey={activeKeyNav}
      setActiveKey={onSelect}
      {...others}
    >
      <Timeline
        id={'Wrapper_timeline'}
        ref={listItem}
        onScroll={scrollLoadMore}
      >
        {_renderTimeline()}
        {_renderIconLoadMore()}
        {_renderModalAuction(currentAuction)}
      </Timeline>
    </WrapperContentBody>
  )
}

export default React.memo(AppointmentSchedule)
