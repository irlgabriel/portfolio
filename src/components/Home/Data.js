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
  subtitleContent: ["Ruby on Rails", "Ruby","Javascript", "HTML5", "CSS3", "Amazon Web Storage"],
  smallDesc: "A facebook clone using ruby on rails.",
  features: "Responsive Design, Facebook oAuth, Email Confirmation, Posts, Comments, Replies, Post/Comment Likes, Friend Requests and more. Try it out right now.",
  liveURL: "https://github.com/irlgabriel/facebook-odin",
  codeURL: "https://github.com/irlgabriel/facebook-odin",
  projectIcon: <DiRuby />,
  projectIconColor: "red",
  imageLeft: false,

}

export const ProjectTwo = {
  bgColor: "#101522",
  textColor: "white",
  img: require("../../images/library.png"),
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
  liveURL: "https://github.com/irlgabriel/facebook-odin",
  codeURL: "https://github.com/irlgabriel/facebook-odin",
  projectIcon: <FaReact />,
  projectIconColor: "lightblue",
  imageLeft: false,

}