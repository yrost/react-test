import React from 'react';
import styled from 'styled-components';

import Background from '../components/Background'
import Button from '../components/Button'
import img from '../images/main-page.png'
import { useHistory } from 'react-router-dom';

const Wrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  position: absolute;
  top: 50%;
  transform: translate(35%, -50%);
`;

const Heading = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 28px;
  margin-bottom: 20px;
`;

const Home = () => {
  const history = useHistory();

  return (
    <>
      <Background img={img}>
        <Wrapper>
          <Heading>Hey, Morty!</Heading>
          <Paragraph>Wanna enjoy some adventure?</Paragraph>
          <Button onClick={() => { history.push('/episodes') }} primary big>Follow me</Button>
        </Wrapper>
      </Background>
    </>
  )
}

export default Home;