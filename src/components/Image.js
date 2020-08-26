import styled from "styled-components";

const Image = styled.img`
  width: ${props => props.width};
  background: ${props => props.image} no-repeat;
`

export default Image;