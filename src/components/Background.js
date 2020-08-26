import styled from "styled-components";

const Background = styled.section`
  background: url(${props => props.img}) 100% 100% no-repeat;
  width: 100%;
  min-height: 94.7vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default Background;