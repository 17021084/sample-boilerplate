import gql from 'graphql-tag'

export const v1AdminBookingList = gql`
  query($filter: Filter!, $page: Int!) {
    v1AdminBookingList(
      filter: $filter
      per_page: 10
      page: $page
      order_by: "booking_at DESC"
    ) {
      edges {
        node {
          id
          booking_type
          status
          booking_at
          name
          auction_item {
            category_name
            images
          }
          user {
            full_name
            avatar_url
          }
          auction {
            name
            started_at
            ended_at
          }
        }
      }
      meta {
        total_count
        current_page
        total_pages
        next_page
      }
    }
  }
`

export const v1AdminBookingSummary = gql`
  query v1AdminBookingSummary {
    v1AdminBookingSummary {
      edges {
        node {
          bookings_total
          id
          summary_type
        }
      }
    }
  }
`

export const v1AdminBooking = gql`
  query($id: ID!) {
    v1AdminBooking(id: $id) {
      address
      auction {
        name
        started_at
        ended_at
      }
      auction_item {
        auction_name
        used_hours
        year_of_manufacture
        thumb_url
        status
        marker
        min_price
        price
        address
        source_link
      }
      name
      booking_at
      booking_type
      name
      status
      user {
        avatar_url
        full_name
      }
      zoom_id
      zoom_password
    }
  }
`
export const v1AdminUpdateBooking = gql`
  mutation($input: AdminUpdateBookingInput!) {
    v1AdminUpdateBooking(input: $input) {
      data {
        status
      }
    }
  }
`
