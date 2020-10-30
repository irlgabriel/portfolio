import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

/*
.slide {
  background: lightgray;
}
*/

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
  background-image: url("https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  z-index: -4;
  //filter: blur(4px);
}

#main {
  width: 100%;
  flex: 1;
  position: relative;
}
.page-wrapper, .inner-wrapper {
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

.project-info-col {
  position: relative;
}

#some-div-overlay {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(70, 72, 82, 0.3);
  z-index: -3;
}

.project-link {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  padding: 4px 0;
  border: 1px solid white;
  border-radius: 4px;
  background: darkslategray;
  a {
    color: white !important;
    text-decoration: none;
  }
}

.carousel-bubbles {
  width: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bubble {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid white;
  margin: 5px auto;
  transition: all 600ms ease-in-out;
  &:hover {
    background: royalblue;
  }
}
.checked-bubble {
  background: royalblue;
}

.project-container {
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: auto;
}
.projects-carousel {
  max-width: 90% !important;
}
.project-carousel-col {
  max-height: 300px !important;
}

#page-wrapper {
  position: relative;
}

// REACT-TRANSITION-GROUP ANIMATIONS

.page-enter {
  transform: scale(1.1);
}

.page-enter-active {
  opacity: 1;
  transform: scale(1);
  transition: opacity 300ms, transform 300ms;
}

.page-exit {
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


.section-scroll-inverse-exit {
  transform: translateY(-200%);
}
.section-scroll-inverse-exit-active {
  transform: translateY(0%);
  transition: all 600ms ease-in-out;
}
.section-scroll-inverse-enter {
  transform: translateY(0%);
}
.section-scroll-inverse-enter-active {
  transform: translateY(200%);
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
