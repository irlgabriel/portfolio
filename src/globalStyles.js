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
.projects-carousel {
  display: inline-block;
  width: 90%;
}
.carousel-bubbles {
  width: 5%;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.bubble {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid gray;
  margin: 5px 0;
  transition: all 600ms ease-in-out;
}
.checked-bubble {
  background: royalblue;
}

// REACT-TRANSITION-GROUP ANIMATIONS
.page {
  position: absolute;
  left: 15px;
  right: 15px;
}

.page-enter {
  opacity: 0;
  transform: scale(1.1);
}

.page-enter-active {
  opacity: 1;
  transform: scale(1);
  transition: opacity 300ms, transform 300ms;
}

.page-exit {
  opacity: 1;
  transform: scale(1);
}

.page-exit-active {
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 300ms, transform 300ms;
}

.section-scroll-exit {
  transform: translateY(200%);
}
.section-scroll-exit-active {
  transform: translateY(0%);
  transition: all 600ms ease-in-out;
}
.section-scroll-enter {
  transform: translateY(0%);
}
.section-scroll-enter-active {
  transform: translateY(-200%);
  transition: all 600ms ease-in-out;
}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
`;

export default GlobalStyle;
