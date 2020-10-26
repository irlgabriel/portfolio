import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
body {
  position: relative;
}
#root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.bg-img {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  border: none;
  width: 100%;
  height: 100%;
  background: #2851A6 url("http://i.stack.imgur.com/spmUM.gif") left repeat-x;
  background-size: auto 65%;
  background-position: bottom;
  z-index: -5 !important;
}

#main {
  width: 100%;
  flex: 1;
  position: relative;
}

.list-group-item {
  border: none;
}

.active {
  border: none;
  h4 {
    transform: translateY(-5px);
    color: rgba(200,0,10,.8) !important;
  }
}

.border-right-radius-5 {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.border-left-radius-5 {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
#footer {
  border-top: 1px solid darkslategray;;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
}

.border-radius-0{
  border-radius: 0px !important;
}

.card {
  border: 1px solid darkslategrey;
}
.container-info {
  position: absolute;
  top:0;
  left:0;
  padding: .5rem 1rem;
  background: white;
  
}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
`;



export default GlobalStyle;
