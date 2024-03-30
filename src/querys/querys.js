import { gql } from '@apollo/client'

export const RANDOM_CHARACTERS = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      info {
        count
        prev
        next
        pages
      }
      results {
        id
        name
        image
      }
    }
  }
`

export const CHARACTER_SELECTED = gql`
  query findCharacterByName($page: Int!, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      info {
        count
        prev
        next
        pages
      }
      results {
        id
        name
        image
      }
    }
  }
`;
