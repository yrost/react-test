import { gql } from '@apollo/client';

export const GET_EPISODES = gql`
  query Episodes ($page: Int!) {
    episodes(page: $page, filter: {}) {
      info {
        pages
      }
      results {
        id,
        episode,
        name,
        air_date,
        characters {
          name
        }
      }
    }
  }
`;
