import styled from "styled-components";

const Card = styled.div`
  display: flex;
  margin: 10px;
  border-radius: 15px;
  background-color: #202329;
  color: white;
  width: ${props => props.width};
  justify-content: space-between;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export default Card;