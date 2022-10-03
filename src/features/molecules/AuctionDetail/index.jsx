import React from 'react'
import AuctionInfoGroup from '../AuctionInfoGroup'
import { Wrapper, FieldAuction, Button } from './styled'
import PropTypes from 'prop-types'

const AuctionDetail = ({ data, changeStatus, ...others }) => {
  const {
    avatarUrl,
    name,
    title,
    nameAuction,
    auction_image,
    time,
    activeKey,
    statusOnline,
    currentTime,
    countdown,
    auction_name,
    year_of_manufacture,
    used_hours,
    address,
    min_price
  } = data

  return (
    <Wrapper {...others}>
      <AuctionInfoGroup
        avatarUrl={avatarUrl}
        name={name}
        title={title}
        nameAuction={nameAuction}
        auction_image={auction_image}
        time={time}
        activeKey={activeKey}
        statusOnline={statusOnline}
        currentTime={currentTime}
        countdown={countdown}
        changeStatus={changeStatus}
      />
      <FieldAuction
        content={'Link phòng đấu giá online'}
        value={<Button>Tạo phòng</Button>}
      />
      <FieldAuction content={'Phiên đấu giá'} value={auction_name} />
      <FieldAuction content={'Năm sản xuất'} value={year_of_manufacture} />
      <FieldAuction content={'Số giờ sử dụng'} value={used_hours} />
      <FieldAuction content={'Nơi bán'} value={address} />
      <FieldAuction content={'Giá thấp nhất'} value={min_price} />
    </Wrapper>
  )
}

AuctionDetail.propTypes = {
  data: PropTypes.object,
  changeStatus: PropTypes.func
}

export default React.memo(AuctionDetail)
