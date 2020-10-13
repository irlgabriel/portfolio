import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
.slider-button {
  border: none;
  background: lightsalmon;
  color: white;
  margin: .5rem;
  margin-left: 0;
  padding: .5rem 1.25rem;
  border-radius: 5px;
}

.slider {
  width: 450px;
  height: 350px;
}
`

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
`

export default GlobalStyle;