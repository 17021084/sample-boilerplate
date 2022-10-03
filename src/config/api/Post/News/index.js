import graphql from 'graphql-tag'

export const v1AdminNewsList = graphql`
  query($filter: Filter!, $page: Int!) {
    v1CommonNewsList(filter: $filter, per_page: 10, page: $page) {
      edges {
        node {
          id
          short_description
          created_at
          status
          title
          votes_total
          comments_total
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

export const v1AdminNews = graphql`
  query($id: ID!) {
    v1CommonNews(id: $id) {
      comments_count
      comments_total
      content_url
      cover_url
      created_at
      created_in_word
      html_content
      id
      published_at
      short_description
      slug
      status
      title
      updated_at
      votes_total
    }
  }
`

export const v1AdminUpdateNews = graphql`
  mutation($input: AdminUpdateNewsInput!) {
    v1AdminUpdateNews(input: $input) {
      clientMutationId
      data {
        html_content
        id
        cover_url
        content_url
        comments_total
        comments_count
        published_at
        short_description
        title
        votes_total
        slug
      }
    }
  }
`
