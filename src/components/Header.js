import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.header`
  background: white;
  color: black;
  height: 50px;
`
const NavItems = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0 auto;
  padding: 0;
  width: 500px;
`;

const NavItem = styled.li`
  color: black;
  padding: 7px 0;
    a {
      text-decoration: none;
      color: black;
      font-weight: 700;
      font-size: 24px;
    }
    &:hover {
      border-bottom: 1px solid black;
    }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <nav>
        <NavItems>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/episodes">Episodes</Link>
          </NavItem>
          <NavItem>
            <Link to="/characters">Characters</Link>
          </NavItem>
        </NavItems>
      </nav>
    </HeaderWrapper>
  )
}

export default Header;