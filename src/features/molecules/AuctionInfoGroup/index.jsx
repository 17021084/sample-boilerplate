import moment from 'moment'
import PropTypes from 'prop-types'
import React, { useCallback, useEffect, useState } from 'react'
import { Constants } from 'utils'
import {
  AvatarGroup,
  DropdownStatus,
  Image,
  Text,
  TextLink,
  Wrapper,
  WrapperAvatar,
  WrapperBlock,
  WrapperContainer,
  WrapperContent,
  WrapperLeft,
  WrapperRight,
  WrapperTime
} from './styled'

const AuctionInfoGroup = ({
  avatarUrl,
  name,
  title,
  nameAuction,
  time,
  statusOnline,
  currentTime,
  countdown,
  auction_image,
  activeKey,
  changeStatus,
  ...others
}) => {
  const { dropdownStatus } = Constants
  const [message, setMessage] = useState()

  const handleCountDown = useCallback(() => {
    if (!countdown) return
    genCountDown()
    const interval = setInterval(() => genCountDown(), 1000)

    return () => clearInterval(interval)
  }, [countdown, genCountDown])

  const genCountDown = useCallback(() => {
    const currentTime = moment()
    const endedAt = countdown.utcToLocalDate()
    const diffTime = moment(endedAt).diff(currentTime)

    if (diffTime <= 0) {
      setMessage('Đã kết thúc')
      return
    }

    const duration = moment.duration(diffTime)
    const months = duration.months()
    const days = duration.days()
    const time = moment(diffTime).format('HH:mm:ss')
    setMessage(`${months > 0 ? `${months} tháng` : ''} ${days} ngày ${time}`)
  }, [moment, message, countdown])

  useEffect(() => {
    handleCountDown()
  }, [countdown])

  return (
    <Wrapper {...others}>
      <WrapperLeft>
        <WrapperAvatar>
          <AvatarGroup circle src={avatarUrl} />
          <TextLink>{name}</TextLink>
        </WrapperAvatar>

        <WrapperContainer>
          <Image source={auction_image} />
          <WrapperBlock>
            <Text bold>{title}</Text>
            <Text>
              Phiên đấu giá: <Text bold>{nameAuction}</Text>
            </Text>
            <Text>
              Thời gian: <Text bold>{time}</Text>
            </Text>
          </WrapperBlock>
        </WrapperContainer>
      </WrapperLeft>

      <WrapperRight>
        <WrapperContent>
          <Text bold link uppercase>
            {statusOnline}
          </Text>
          <Text link>{currentTime}</Text>
          <WrapperTime>{message}</WrapperTime>
          <DropdownStatus
            title={dropdownStatus[activeKey] || 'Trạng thái'}
            items={Object.values(dropdownStatus)}
            activeKey={dropdownStatus[activeKey]}
            changeStatus={changeStatus}
            disabled={message === 'Đã kết thúc'}
          />
        </WrapperContent>
      </WrapperRight>
    </Wrapper>
  )
}

AuctionInfoGroup.propTypes = {
  countdown: PropTypes.string,
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string,
  title: PropTypes.string,
  nameAuction: PropTypes.string,
  time: PropTypes.string,
  statusOnline: PropTypes.string,
  currentTime: PropTypes.string,
  auction_image: PropTypes.string,
  activeKey: PropTypes.string,
  changeStatus: PropTypes.func
}

export default React.memo(AuctionInfoGroup)
