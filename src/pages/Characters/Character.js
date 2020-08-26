import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTER } from '../../schemas/characters_schema';
import { useParams, useHistory } from 'react-router-dom';

import styled from 'styled-components';
import Image from '../../components/Image';
import Button from '../../components/Button';
import Card from '../../components/Card';

const CharacterWrapper = styled.div`
  display: flex;
  margin: 0px 10px;
  align-items: center;
`
const CharacterInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`
const CharacterInfoText = styled.p`
  font-size: 25px;
  font-weight: 600;
`

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
      <Button primary onClick={() => history.goBack()}>Go back</Button>
      <Card width={"650px"}>
        <CharacterWrapper>
          <Image width={'300px'} src={character.image}/>
          <CharacterInfo>
            <CharacterInfoText>Name: {character.name}</CharacterInfoText>
            <CharacterInfoText>Status: {character.status}</CharacterInfoText>
            <CharacterInfoText>Species: {character.species}</CharacterInfoText>
            <CharacterInfoText>Gender: {character.gender}</CharacterInfoText>
          </CharacterInfo>
        </CharacterWrapper>
      </Card>
    </section>
  )
}

export default Character;

