import React from "react"
import { FaReact } from "react-icons/fa"
import { DiRuby } from "react-icons/di"


export const ProjectOne = {
  bgColor: "white",
  textColor: "#101522",
  img: require("../../images/facebook.png"),
  alt: "Photo of facebook project",
  projectTitle: "Facebook",
  headingContent: "Frameworks and Technologies",
  subtitleContent: ["Ruby on Rails", "Ruby", "Javascript", "HTML5", "CSS3", "Amazon Web Storage", "Heroku"],
  smallDesc: "A facebook clone using ruby on rails.",
  features: "Responsive Design, Facebook oAuth, Email Confirmation, Posts, Comments, Replies, Post/Comment Likes, Friend Requests and more. Try it out right now.",
  liveURL: "https://whispering-bayou-85275.herokuapp.com/",
  codeURL: "https://github.com/irlgabriel/facebook-odin",
  projectIcon: <DiRuby />,
  projectIconColor: "red",
  imageLeft: false,

}

export const ProjectTwo = {
  bgColor: "#101522",
  textColor: "white",
  img: require("../../images/weather2.png"),
  alt: "Photo of weather project",
  projectTitle: "Weather App",
  headingContent: "Frameworks and Technologies",
  subtitleContent: ["React.js", "Javascript", "Styled Components", "HTML5", "CSS3"],
  smallDesc: "Just another weather app",
  features: "See the weather forecast for your city this coming week!",
  liveURL: "https://irlgabriel.github.io/weather-app/",
  codeURL: "https://github.com/irlgabriel/weather-app/",
  projectIcon: <FaReact />,
  projectIconColor: "lightblue",
  imageLeft: true,
}

export const ProjectThree = {
  bgColor: "white",
  textColor: "#101522",
  img: require("../../images/project3.png"),
  alt: "Photo of CV Project",
  projectTitle: "CV Generator",
  headingContent: "Frameworks and Technologies",
  subtitleContent: ["React.js", "Javascript", "Styled Components", "HTML5", "CSS3"],
  smallDesc: "A simple app that helps you generate a CV!",
  features: "Responsive Design, Create/Edit individual parts of your CV!",
  liveURL: "https://irlgabriel.github.io/Cv-project",
  codeURL: "https://github.com/irlgabriel/Cv-project",
  projectIcon: <FaReact />,
  projectIconColor: "lightblue",
  imageLeft: false,

}

export const ProjectFour = {
  bgColor: "#101522",
  textColor: "white",
  img: require("../../images/library3.png"),
  alt: "Photo of library project",
  projectTitle: "Library",
  headingContent: "Frameworks and Technologies",
  subtitleContent: ["React.js", "React Router", "Javascript", "Google Firebase", "Styled Components", "HTML5", "CSS3"],
  smallDesc: "A small app for book lovers!",
  features: "Store your favorite books in an aesthetically pleasing way with this small app powered by the latest technologies!",
  liveURL: "https://irlgabriel.github.io/library-project-redo/#/",
  codeURL: "https://github.com/irlgabriel/library-project-redo/",
  projectIcon: <FaReact />,
  projectIconColor: "lightblue",
  imageLeft: true,
}

export const ProjectFive = {
  bgColor: "white",
  textColor: "#101522",
  img: require("../../images/memory-game.png"),
  alt: "Photo of memory card game project",
  projectTitle: "Memory-card-game",
  headingContent: "Frameworks and Technologies",
  subtitleContent: ["React.js", "Javascript", "Styled Components", "HTML5", "CSS3"],
  smallDesc: "Small app to practice your memory (and my ReactJS effect and state hooks)",
  features: "Test you memory with this netflix-themed memory game.",
  liveURL: "https://irlgabriel.github.io/memory-card-game/#/",
  codeURL: "https://github.com/irlgabriel/memory-card-game",
  projectIcon: <FaReact />,
  projectIconColor: "lightskyblue",
  imageLeft: false,
}