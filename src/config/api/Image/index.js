import graphql from 'graphql-tag'

export const v1AdminCreateImage = graphql`
  mutation v1AdminCreateImage($input: AdminCreateImageInput!) {
    v1AdminCreateImage(input: $input) {
      data
    }
  }
`
