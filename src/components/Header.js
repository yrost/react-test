import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.header`
  background: white;
  color: black;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/episodes">Episodes</Link>
          </li>
          <li>
            <Link to="/characters">Characters</Link>
          </li>
        </ul>
      </nav>
    </HeaderWrapper>
  )
}

export default Header;