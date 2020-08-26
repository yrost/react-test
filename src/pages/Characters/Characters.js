import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useHistory } from "react-router-dom";

import { GET_CHARACTERS } from '../../schemas/characters_schema';

import Background from '../../components/Background';
import Button from '../../components/Button';
import Card from '../../components/Card';
import PaginationWrapper from '../../components/PaginationWrapper';
import Image from '../../components/Image';
import Wrapper from '../../components/Wrapper';
import img from '../../images/characters.jpg';

const Characters = () => {
  const history = useHistory();

  const [page, setPage] = useState(1);
  const setNextPage = () => {
    setPage(page + 1)
  };
  const setPreviousPage = () => {
    setPage(page - 1)
  };
  
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: {
      page,
    },
  });
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Background img={img}>
      <div>
        <Wrapper>
          {
            data.characters.results.map((el) => {
              return (
                <div key={el.id}>
                  <Card width={'300px'} onClick={() => history.push(`/character/${el.id}`)}>
                    <Image width={'100px'} src={el.image}/>
                    <p>{el.name}</p>
                    <p>{el.status}</p>
                  </Card>
                </div>
              )
            })
          }
        </Wrapper>
        <PaginationWrapper>
          <Button primary disabled={page === 1} onClick={setPreviousPage}>Previous Page</Button>
          <Button primary disabled={page === data.characters.info.pages} onClick={setNextPage}>Next Page</Button>
        </PaginationWrapper>
      </div>
    </Background>
  )
}

export default Characters;