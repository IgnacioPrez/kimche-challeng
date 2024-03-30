import { gql } from '@apollo/client'

export const RANDOM_CHARACTERS = gql`
  query GetCharacters($page: Int!, $status: String, $gender: String, $species: String) {
    characters(page: $page, filter:{status: $status, gender: $gender, species: $species}) {
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


export const CHARACTER_SELECTED = gql`
  query findCharacterByName($page: Int!, $name: String, $status: String, $gender: String, $species: String) {
    characters(page: $page, filter: { name: $name, status: $status, gender: $gender, species: $species }) {
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
