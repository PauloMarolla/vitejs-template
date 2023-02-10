import { gql } from '@apollo/client'

export const GET_COUNTRIES = gql`
  query Query($code: ID!) {
    countries {
      name
      currency
      phone
      code
    }
    continents {
      name
    }
    country(code: $code) {
      name
    }
  }
`
