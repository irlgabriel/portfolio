import React from "react";
import { FaReact, FaNode } from "react-icons/fa";
import { DiRuby } from "react-icons/di";

export const mainProjects = [
  {
    bgColor: "white",
    textColor: "#101522",
    images: [
      { src: require("../../images/facebook6.png"), idx: 0 },
      { src: require("../../images/facebook2.png"), idx: 1 },
      { src: require("../../images/facebook3.png"), idx: 2 },
      { src: require("../../images/facebook4.png"), idx: 3 },
      { src: require("../../images/facebook5.png"), idx: 4 },
    ],
    alt: "Photo of facebook project",
    projectTitle: "Facebook",
    headingContent: "Frameworks and Technologies",
    subtitleContent: [
      "Ruby on Rails",
      "Ruby",
      "Bootstrap",
      "HTML5",
      "CSS3",
      "PostgreSQL",
      "Amazon Web Storage",
      "Heroku",
    ],
    smallDesc: "A facebook clone using ruby on rails.",
    features:
      "Responsive Design, Facebook oAuth, Email Confirmation, Posts, Comments, Replies, Post/Comment Likes, Friend Requests and more. Try it out right now.",
    liveURL: "https://whispering-bayou-85275.herokuapp.com/",
    codeURL: "https://github.com/irlgabriel/facebook-odin",
    projectIcon: <DiRuby />,
    projectIconColor: "red",
    imageLeft: false,
    slides: 5,
    key: "1",
  },
  {
    bgColor: "#101522",
    textColor: "white",
    images: [
      { src: require("../../images/weather2.png"), idx: 0 },
      { src: require("../../images/weather3.png"), idx: 1 },
      { src: require("../../images/weather4.png"), idx: 2 },
    ],
    alt: "Photo of weather project",
    projectTitle: "Weather App",
    headingContent: "Frameworks and Technologies",
    subtitleContent: [
      "React.js",
      "Javascript",
      "Styled Components",
      "HTML5",
      "CSS3",
    ],
    smallDesc: "Just another weather app",
    features: "See the weather forecast for your city this coming week!",
    liveURL: "https://irlgabriel.github.io/weather-app/",
    codeURL: "https://github.com/irlgabriel/weather-app/",
    projectIcon: <FaReact />,
    projectIconColor: "lightblue",
    imageLeft: true,
    key: "2",
  },
  {
    bgColor: "white",
    textColor: "#101522",
    images: [
      { src: require("../../images/mern1.png"), idx: 0 },
      { src: require("../../images/mern2.png"), idx: 1 },
    ],
    alt: "Photo of shopping list project",
    projectTitle: "Shopping List",
    headingContent: "Frameworks and Technologies",
    subtitleContent: [
      "Node.js",
      "Express.js",
      "JWT Auth",
      "React",
      "Redux",
      "Heroku",
      "Javascript",
      "Bootstrap",
      "HTML",
      "CSS",
    ],
    smallDesc: "A simple shopping list built with MERN stack",
    features:
      "Just a shopping list that you can add and remove items(once you log in). I know it is overkill to have a full stack app for this purpose, but I only built it to get familiar with node, express and redux. I will expand on this app's functionality very soon.",
    liveURL: "https://tranquil-anchorage-36599.herokuapp.com",
    codeURL: "https://github.com/irlgabriel/mern-shopping-list",
    projectIcon: <FaNode />,
    projectIconColor: "orange",
    imageLeft: false,
    slides: 2,
    key: "1",
  }
]
export const projects = [
  {
    bgColor: "white",
    textColor: "#101522",
    images: [{ src: require("../../images/project3.png"), idx: 0 }],
    alt: "Photo of CV Project",
    projectTitle: "CV Generator",
    headingContent: "Frameworks and Technologies",
    subtitleContent: [
      "React.js",
      "Javascript",
      "Styled Components",
      "HTML5",
      "CSS3",
    ],
    smallDesc: "A simple app that helps you generate a CV!",
    features: "Responsive Design, Create/Edit individual parts of your CV!",
    liveURL: "https://irlgabriel.github.io/Cv-project",
    codeURL: "https://github.com/irlgabriel/Cv-project",
    projectIcon: <FaReact />,
    projectIconColor: "lightblue",
    imageLeft: false,
    key: "3",
  },
  {
    bgColor: "#101522",
    textColor: "white",
    images: [
      { src: require("../../images/library3.png"), idx: 0 },
      { src: require("../../images/library4.png"), idx: 1 },
      { src: require("../../images/library5.png"), idx: 2 },
    ],
    alt: "Photo of library project",
    projectTitle: "Library",
    headingContent: "Frameworks and Technologies",
    subtitleContent: [
      "React.js",
      "React Router",
      "Javascript",
      "Google Firebase",
      "Styled Components",
      "HTML5",
      "CSS3",
    ],
    smallDesc: "A small app for book lovers!",
    features:
      "Store your favorite books in an aesthetically pleasing way with this small app powered by the latest technologies!",
    liveURL: "https://irlgabriel.github.io/library-project-redo/#/",
    codeURL: "https://github.com/irlgabriel/library-project-redo/",
    projectIcon: <FaReact />,
    projectIconColor: "lightblue",
    imageLeft: true,
    key: "4",
  },
  {
    bgColor: "white",
    textColor: "#101522",
    images: [
      { src: require("../../images/memory-game.png"), idx: 0 },
      { src: require("../../images/memory-game-2.png"), idx: 1 },
      { src: require("../../images/memory-game-3.png"), idx: 2 },
    ],
    alt: "Photo of memory card game project",
    projectTitle: "Netflix Cards",
    headingContent: "Frameworks and Technologies",
    subtitleContent: [
      "React.js",
      "Javascript",
      "Styled Components",
      "HTML5",
      "CSS3",
    ],
    smallDesc:
      "Small app to practice your memory (and my ReactJS effect and state hooks)",
    features: "Test you memory with this netflix-themed memory game.",
    liveURL: "https://irlgabriel.github.io/memory-card-game/#/",
    codeURL: "https://github.com/irlgabriel/memory-card-game",
    projectIcon: <FaReact />,
    projectIconColor: "lightskyblue",
    imageLeft: false,
    key: "5",
  },
  
];
