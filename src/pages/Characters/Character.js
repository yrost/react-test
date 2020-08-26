import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTER } from '../../schemas/characters_schema';
import { useParams, useHistory } from 'react-router-dom';

const Character = () => {
  const { id } = useParams();
  const history = useHistory();
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: {
      id
    },
  });
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { character } = data;

  return (
    <section>
      <button onClick={() => history.goBack()}>Go back</button>
      <div key={character.id}>
        <div style={{display: 'flex', margin: '0 10px'}}>
          <img style={{width: '100px'}} src={character.image} alt={character.name}/>
          <div style={{display: 'flex', flexDirection: 'column', margin: '0 10px'}}>
            <p>Name: {character.name}</p>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Character;

