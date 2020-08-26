import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useHistory } from "react-router-dom";

import { GET_CHARACTERS } from '../../schemas/characters_schema';

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
    <section>
      <h1>Characters</h1>
      <button disabled={page === 1} onClick={setPreviousPage}>Previous Page</button>
      <button disabled={page === data.characters.info.pages} onClick={setNextPage}>Next Page</button>
      {
         data.characters.results.map((el) => {
          return (
            <div key={el.id}>
              <div onClick={() => history.push(`/character/${el.id}`)} style={{display: 'flex', margin: '0 10px'}}>
                <img style={{width: '100px'}} src={el.image} alt={el.name}/>
                <p>{el.name}</p>
                <p>{el.status}</p>
              </div>
            </div>
          )
        })
      }

      <button disabled={page === 1} onClick={setPreviousPage}>Previous Page</button>
      <button disabled={page === data.characters.info.pages} onClick={setNextPage}>Next Page</button>
    </section>
  )
}

export default Characters;