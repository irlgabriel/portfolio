import { createGlobalStyle } from "styled-components";

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
#main {
  width: 100%;
  flex: 1;
  position: relative;
}
#topmost-container {
  padding: 0 !important;
  position: relative;
  height: 100vh;
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
#navbar {
  height: 50px;
}


.footer-item {
  padding: 0;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-10px);
  }
}

.list-group h5 {
  font-family: 'Press Start 2P', 'Roboto';
  font-size: 12px;
}

.list-group-item {
  border: none;
  padding: 0 !important;
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
.border-radius-0{
  border-radius: 0px !important;
}
.project-image {
  height: 100%;
  width: 100%;
}
.page-overlay {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(70, 72, 82, 0.3);
  z-index: -3;
}
.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(70, 72, 82, 0.7);
  z-index: -4;
}
.tech-icons-container {
  margin: 4px 0;
}
.tech-icon {
  margin: 0 4px;
}
.project-link {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  margin: 6px;
  padding: 4px;
  border-radius: 4px;
  background: darkslategray;
  color: white !important;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
}
#intro-title {
  text-align: center;
  color: white;
}

#code-links {
  justify-content: space-between;
}

// MAIN LAYOUT
#page-wrapper {
  flex: 1;
  overflow: hidden;
}
#projects-slider {
  transition: all 1.2s cubic-bezier(.43,.35,0,1);
  height: 100% !important;
  border: 1px solid royalblue;
}
.project-slide {
  height: 100% !important;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
}
.projects-sidebar {
  position: absolute;
  right: 10%;
  top: 30%;
}
.project-sidebar-item {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin: 5px 0;
  border: 1px solid black;
}
.hover-info {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  color: white;
  position: absolute;
  z-index: 2212;
  display: flex;
  flex-direction: column;
}
#image-container { 
  max-height: 100%;
  max-width: 65%;
  padding: 0 !important;
  position: relative;
  box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.75);
}



// REACT-TRANSITION-GROUP ANIMATIONS

.fade-enter {
  opacity: 0;
  transform: scale(1.1);
}

.fade-enter-active {
  opacity: 1;
  transform: scale(1);
  transition: opacity 500, transform 500;
}

.fade-exit {
  opacity: 1;
  transform: scale(1);
}

.fade-exit-active {
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 500, transform 500;
}

.fade2-enter {
  opacity: 0;
}
.fade2-enter-active {
  opacity: 1;
  transition: all .5s ease-in-out;
}
.fade2-exit {
  opacity: 1;
}
.fade2-exit-active {
  opacity: 0;
  transition: all .5s ease-in-out;
}

.fade-abs {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.fade-abs-enter {
  opacity: 0;
  transform: scale(1.1);
}

.fade-abs-enter-active {
  opacity: 1;
  transform: scale(1);
  transition: opacity 500, transform 500;
}

.fade-abs-exit {
  opacity: 1;
  transform: scale(1);
}

.fade-abs-exit-active {
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 500, transform 500;
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

export default GlobalStyle;
