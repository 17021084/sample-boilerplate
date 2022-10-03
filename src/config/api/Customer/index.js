import graphql from 'graphql-tag'

export const v1AdminCustomers = graphql`
  query v1AdminCustomers($filter: Filter!, $page: Int!) {
    v1AdminCustomers(per_page: 10, filter: $filter, page: $page) {
      edges {
        node {
          avatar_url
          first_name
          last_name
          phone
          email
          user_type
          remember_created_at
          role
          id
        }
      }
      meta {
        next_page
        current_page
        total_count
        total_pages
      }
    }
  }
`

export const v1AdminCreateUser = graphql`
  mutation v1AdminCreateUser($input: AdminCreateUserInput!) {
    v1AdminCreateUser(input: $input) {
      data {
        id
        avatar_url
        first_name
        last_name
        phone
        email
        user_type
        remember_created_at
        role
      }
    }
  }
`

export const v1AdminUpdateUser = graphql`
  mutation v1AdminUpdateUser($input: AdminUpdateUserInput!) {
    v1AdminUpdateUser(input: $input) {
      data {
        avatar_url
        first_name
        last_name
        phone
        email
        user_type
        remember_created_at
        role
      }
    }
  }
`
