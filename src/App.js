import React from 'react';

import Background from './components/Background'
import Header from './components/Header'
import Button from './components/Button'
import img from './images/main-page.png'

import './App.css';
import styled from 'styled-components';

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

function App() {
  return (
    <div className="App">
      <Background img={img}>
        <Header/>
        <Wrapper>
          <Heading>Hey, Morty!</Heading>
          <Paragraph>Wanna enjoy some adventure?</Paragraph>
          <Button primary big>Follow me</Button>
        </Wrapper>
      </Background>
    </div>
  );
}

export default App;
