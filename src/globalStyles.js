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
  height: 100vh !important;
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
#navigate-div {
  display: flex;
  position: absolute;
  top: 40%;
  right: 10px;
  color: white;
  transform: scale(1.4);
}
#navigate-info {
  transform: rotate(90deg);
}
#scroll-icon {
  font-size: 32px;
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
.project-title {
  margin-top: .5rem;
}
.project-desc {
  margin-bottom: 0;
  line-height: 1.2;
}
#code-links {
  justify-content: space-between;
}
// MAIN LAYOUT
#page-wrapper {
  flex: 1;
  overflow: hidden;
  display: flex;
  padding: 0;
  position: relative;
}
#inner-page-wrapper {
  display: flex;
  flex-direction: row;
}
#projects-slider {
  transition: all 1.5s cubic-bezier(.43,.35,0,1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 700%;
  max-width: 70%;

}
.project-slide {
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.projects-sidebar {
  position: relative;
  padding: 0 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  overflow-x: hidden;
}
.project-sidebar-item {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 2px solid black;
  transition: all .5s ease-in-out;
  position: relative;
  margin: .45rem 0;
}
.active-sidebar {
  background: royalblue;
  z-index: 122;
}
.sidebar-onhover {
  user-select: none;
  cursor: default;
  padding: .5rem .75rem;
  background: lightgrey;
  border-radius: 5px;
  transition: all .5s ease-in-out;
  &:hover {
    background: royalblue;
  }
}
.project-sidebar-row {
  padding: 5px 0;
  display: flex;
  align-items: center;
  p {
    margin-left: 5px;
    margin-bottom: 0;
    line-height: 1;
    font-size: 14px;
  }
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
  max-width: 75%;
  padding: 0 !important;
  position: relative;
  box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.75);
}

// INTRO LAYOUT
#intro-cards-row {
  height: 100% !important;
  flex-wrap: nowrap;
  overflow-y: scroll;
}
.intro-card {
  position: relative;
  border: 1px solid royalblue;
  &:first-child {
  }
  &:last-child{
  }
}
#what-card {
  position: relative;  
  background-image: url("https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  .page-overlay {
    z-index: 2;
  }
}
#who-card {
  position: relative;
  background-image: url("https://res.cloudinary.com/dvse0yuih/image/upload/v1604520677/F2B21B1A-5368-4838-924B-4EF9FB892BF6_kolxgg.jpg");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  .page-overlay {
    z-index: 2;
  }
}
#who-image, #what-image {
  position: absolute;
  top: 0;
  right :0;
  left: 0;
  bottom: 0;
}
.see-more {
  padding: .5rem;
  border: 1px solid white;
  border-radius: 5px;
  background: lightskyblue;
  position: absolute;
  bottom: 5px;
  right: 5px;
}

// REACT-TRANSITION-GROUP ANIMATIONS

.left-slide-enter {
  transform: translateX(-300%);
}
.left-slide-enter-active{
  transform: translateX(0);
  transition: all .5s;
}
.left-slide-exit {
  transform: translateX(0);
}
.left-slide-exit-active {
  transform: translateX(-300%);
  transition: all .5s;
}

.fade {
  position: absolute;
}
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  opacity: 1;
  transition: all .5s;
}

.fade-exit {
  opacity: 1;
}

.fade-exit-active {
  opacity: 0;
  transition: all .5s;
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

.sidebar-bubble-enter {
  opacity: 0;
  transform: translateX(200%);
}
.side-bubble-enter-active {
  opacity: 1;
  transform: translateX(0%);
  transition: all .5s ease-in-out;
}
.side-bubble-exit {
  opacity: 1;
  transform: translateX(0%);
}
.side-bubble-exit-active {
  opacity: 0;
  transform: translateX(200%);
  transition: all .5s ease-in-out;
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
