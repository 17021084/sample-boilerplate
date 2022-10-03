import graphql from 'graphql-tag'

export const v1CommonVideoList = graphql`
  query($filter: Filter!, $page: Int!) {
    v1CommonVideoList(filter: $filter, per_page: 10, page: $page) {
      edges {
        node {
          id
          cover_url
          description
          published_at
          video_id
          title
          status
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
export const v1CommonVideo = graphql`
  query($id: ID!) {
    v1CommonVideo(id: $id) {
      cover_url
      created_at
      description
      id
      published_at
      slug
      status
      title
      updated_at
      video_id
    }
  }
`
