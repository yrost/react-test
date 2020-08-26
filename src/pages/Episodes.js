import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_EPISODES } from '../schemas/episodes_schema';

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
      <h1>Episodes</h1>
      {
         data.episodes.results.map((el) => {
          return (
            <div key={el.id}>
              <div style={{display: 'flex', margin: '0 10px'}}>
                <p>{el.episode}</p>
                <p>{el.name}</p>
                <p>{el.air_date}</p>
              </div>
              <div style={{display: 'flex'}}>
                {el.characters.map((char) => {
                  return (
                    <p  style={{margin: '0 10px'}}>{char.name}</p>
                  )
                })}
              </div>
            </div>
          )
        })
      }

      <button disabled={page === 1} onClick={setPreviousPage}>Previous Page</button>
      <button disabled={page === data.episodes.info.pages} onClick={setNextPage}>Next Page</button>
    </section>
  )
}

export default Episodes;