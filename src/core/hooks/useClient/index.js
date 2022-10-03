import { ApolloClient, ApolloLink, concat, InMemoryCache } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'
import React from 'react'

const useClient = token => {
  const httpLink = React.useCallback(
    createUploadLink({
      uri: process.env.BASE_API_URL,
      credentials: 'same-origin'
    }),
    []
  )

  const authMiddleware = React.useCallback(
    token => {
      return new ApolloLink(async (operation, forward) => {
        operation.setContext({
          headers: {
            authorization: token ? `Bearer ${token.replaceAll('"', '')}` : null
          }
        })

        return forward(operation)
      })
    },
    [token]
  )

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: concat(authMiddleware(token), httpLink),
    queryDeduplication: false,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore'
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all'
      },
      mutate: {
        errorPolicy: 'all'
      }
    }
  })
}

export default useClient
