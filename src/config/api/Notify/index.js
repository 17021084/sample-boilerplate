import gql from 'graphql-tag'

export const v1AdminNotificationsList = gql`
  query v1AdminNotificationsList($filter: Filter!) {
    v1AdminNotificationsList(per_page: 20, filter: $filter) {
      edges {
        node {
          title
          message
          image_url
          notification_type
          status
          data
          created_at
        }
      }
      meta {
        next_page
        current_page
      }
    }
  }
`
