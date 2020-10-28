import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
.slide {
  background-color: gray !important;
}

body {
  position: relative;
}

.footer-item {
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-10px);
  }
}

#everywhere-container {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
#intro-image {
  position: absolute;
  top:0px;
  bottom:0px;
  left:0px;
  right: 0px;
  background-image: url("https://images.pexels.com/photos/2546926/pexels-photo-2546926.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  z-index: -1;
}



#main {
  width: 100%;
  flex: 1;
  position: relative;
}

.list-group h5 {
  font-family: 'Press Start 2P', 'Roboto';
  font-size: 12px;
}

.list-group-item {
  border: none;
}

.selected {
  border: none;
  color: royalblue !important;
  h5, a {
    transform: translateY(-0.5rem);
    color: royalblue !important;
    padding-bottom: .25rem;
    border-bottom: 1px solid royalblue;
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

#img-me {
  background-image: url("images/me.jpeg")
}

// REACT-TRANSITION-GROUP ANIMATIONS
.page-enter {
  transform: translateX(-100%);
}
.page-enter-active {
  transform: translateX(0%);
  transition: all 300ms;
}
.page-exit {
  transform: translateX(0%);
}
.page-exit-active {
  transform: translateX(100%);
  transition: all 300ms;
}

.section-scroll-enter {
  transform: translateY(100%);
}
.section-scroll-enter-active {
  transform: translateY(0%);
  transition: transform 700ms ease-in-out;
}
.page-carousel-exit {
  transform: translateY(0%);
}
.page-carousel-exit-active {
  transform: translateY(-100%);
  transition: transform 700ms ease-in-out;
}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
`;

export default GlobalStyle;
