import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_EPISODES } from '../schemas/episodes_schema';

import PaginationWrapper from '../components/PaginationWrapper';
import Wrapper from '../components/Wrapper';
import Button from '../components/Button';

import styled from 'styled-components';

const EpisodeInfo = styled.div`
  font-size: 25px;
  font-weight: 600;
  color: white;
  width: 20%;
  p {
    margin: 10px;
  }
`;

const FeaturedCharacters = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: lightskyblue;
  font-weight: 700;
  font-size: 20px;
  width: 80%;
  p {
    margin: 10px;
  }
`;

const WrapperBorder = styled.div`
  background: #202329;
  padding: 25px;
  display: flex;
  margin-bottom: 10px;
`;

const Episodes = () => {
  const [page, setPage] = useState(1);
  const setNextPage = () => {
    setPage(page + 1)
  };
  const setPreviousPage = () => {
    setPage(page - 1)
  };
  
  const { loading, error, data } = useQuery(GET_EPISODES, {
    variables: {
      page,
    },
  });
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <section>
      <PaginationWrapper>
        <Button primary disabled={page === 1} onClick={setPreviousPage}>Previous Page</Button>
        <Button primary disabled={page === data.episodes.info.pages} onClick={setNextPage}>Next Page</Button>
      </PaginationWrapper>
      {
         data.episodes.results.map((el) => {
          return (
            <Wrapper key={el.id}>
              <WrapperBorder>
                <EpisodeInfo>
                  <p>{el.episode}</p>
                  <p>{el.name}</p>
                  <p>{el.air_date}</p>
                </EpisodeInfo>
                <FeaturedCharacters>
                  {el.characters.map((char) => {
                    return (
                      <p key={char.name}>{char.name}</p>
                    )
                  })}
                </FeaturedCharacters>
              </WrapperBorder>
            </Wrapper>
          )
        })
      }
      <PaginationWrapper>
        <Button primary disabled={page === 1} onClick={setPreviousPage}>Previous Page</Button>
        <Button primary disabled={page === data.episodes.info.pages} onClick={setNextPage}>Next Page</Button>
      </PaginationWrapper>
    </section>
  )
}

export default Episodes;