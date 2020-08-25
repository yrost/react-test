import styled from "styled-components";

const Button = styled.button`
  background: ${props => props.primary ? "#59d72a" : "white"};
  color: white;
  border: 1px solid transparent;
	border-radius: 20px;
	width: 150px;
	font-size: 23px;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
`

export default Button;