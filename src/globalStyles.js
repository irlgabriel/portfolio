import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
`

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  background: lightgoldenrodyellow;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
`

export default GlobalStyle;