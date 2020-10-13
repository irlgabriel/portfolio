import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

.carousel {
  box-shadow: ${({bgColor}) => (bgColor === "white" ? "0 0 5px" : "0 0 5px white")};
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