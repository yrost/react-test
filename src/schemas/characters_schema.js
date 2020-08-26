import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query Characters ($page: Int!) {
    characters(page: $page, filter: {}) {
      info {
        pages
      }
      results {
        id,
        name,
        image
      }
    }
  }
`;

export const GET_CHARACTER = gql`
  query Character ($id: ID!) {
    character(id: $id) {
      name,
      species,
      image,
      gender,
      status,
      origin {
        name
      }
    }
  }
`;
