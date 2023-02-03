import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: process.env.GRAPHQL_API_URL,
  cache: new InMemoryCache(),
  name: 'Marolla',
  version: '1.0'
})

export type IQueryGql<T> = {
  data: T
}
