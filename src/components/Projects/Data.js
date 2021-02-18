import React from "react";
import {
  FaSass,
  FaReact,
  FaNode,
  FaBootstrap,
  FaAws,
  FaCss3,
  FaHtml5,
} from "react-icons/fa";
import { DiRuby } from "react-icons/di";
import {
  SiHeroku,
  SiReactrouter,
  SiPostgresql,
  SiJavascript,
  SiMongodb,
  SiFirebase,
  SiRails,
  SiStyledComponents,
} from "react-icons/si";

export const mainProjects = [
  {
    id: "covid-app",
    name: "Covid-19 Charts",
    images: 
      { src: require("../../images/covid19app.png") },
    techIcons: [
      <FaReact size={48}  color="lightblue" />,
      <FaBootstrap size={48}  color="purple" />,
      <FaCss3 size={48}  color="royalblue" />,
      <FaHtml5 size={48}  color="red" />,
      <SiJavascript size={48}  color="yellow" />,
      <FaSass size={48}  color="red" />,
    ],
    desc:
      "A React app that takes data from two different APIs and uses Recharts npm library to display some (hopefully useful) charts with Covid-19 information around the world. ",
    liveURL: "https://irlgabriel.github.io/covid-19-tracker",
    codeURL: "https://github.com/irlgabriel/covid-19-tracker",
    key: "0",
  },
  {
    name: "Weather App",
    id: "weather-app",
    images: 
      { src: require("../../images/weatherapp.png"), idx: 0 },
    techIcons: [
      <FaReact size={48} color="lightblue" />,
      <SiStyledComponents size={48} color="gray" />,
      <SiJavascript  size={48}color="yellow" />,
      <FaHtml5 size={48} color="orange" />,
      <FaCss3 size={48} color="royalblue" />,
    ],
    desc:
      "React app that integrates OpenWeatherMap API and HTML's Geolocation API to display weather forecast for the next week based on your location or the city that you input. This was the first app in which I integrated an API and I was introduced to the ways you can send requests in javascript - XMLHttpRequest vs Fetch(newer). I had an idea to make it look better but unfortunately I don't have enough info with any free weather APIs.",
    liveURL: "https://irlgabriel.github.io/weather-app/",
    codeURL: "https://github.com/irlgabriel/weather-app/",
    projectIcon: <FaReact fontSize="2.5rem" color="lightblue" />,
    key: "2",
  },
  {
    id: "facebook-clone-mern",
    name: "MERN-facebook",
    images: 
      { src: require("../../images/mern-fb.png"), idx: 0 },      
    techIcons: [
      <FaReact size={48} color='royalblue' />,
      <FaBootstrap size={48}  color="purple" />,
      <FaHtml5 size={48}  color="orange" />,
      <FaCss3 size={48}  color="royalblue" />,
      <SiMongodb size={48}  color="green" />,
      <FaAws size={48}  color="yellow" />,
      <SiHeroku size={48}  color="violet" />,
      <SiStyledComponents size={48} color='purple' />,

    ],
    desc:
      "Facebook v2.0. Improved from the first facebook done with rails. This one has a custom back-end with express, authentication with JWT, AJAX requests that you can't do with rails alone, smooth animations, smoother overall UI experience.",
    liveURL: "https://fcloneodin.herokuapp.com/",
    codeURL: "https://github.com/irlgabriel/MERN-facebook",
    projectIcon: <FaReact size={48}  fontSize="2.5rem" color="royalblue" />,
    key: "8",
  },
  {
    id: "facebook-clone",
    name: "Rails-Facebook",
    images: 
      { src: require("../../images/facebookapp.png"), idx: 0 },      
    techIcons: [
      <SiRails size={48}  color="red" />,
      <DiRuby size={48}  color="red" />,
      <FaBootstrap size={48}  color="purple" />,
      <FaHtml5 size={48}  color="orange" />,
      <FaCss3 size={48}  color="royalblue" />,
      <SiPostgresql size={48}  color="green" />,
      <FaAws size={48}  color="yellow" />,
      <SiHeroku size={48}  color="violet" />,
    ],
    desc:
      "A facebook clone built with ruby on rails. This was a great challenge for me, I learned a lot about Rails' Model-View-Controller arhitecture, Forms, HTTP requests, Relational Databases, Schemas and so much more. By far the greatest challenge was figuring out how to add the Friend Request and Notification features, with a very close second being rails' database associations.",
    liveURL: "https://whispering-bayou-85275.herokuapp.com/",
    codeURL: "https://github.com/irlgabriel/facebook-odin",
    projectIcon: <DiRuby size={48}  fontSize="2.5rem" color="red" />,
    key: "1",
  },
  {
    name: "Book Library",
    id: "book-library",
    images: 
      { src: require("../../images/libraryapp.png"), idx: 0 },
    alt: "Photo of library project",
    projectTitle: "Library",
    techIcons: [
      <FaReact size={48}  color="lightblue" />,
      <SiReactrouter size={48}  />,
      <SiJavascript size={48}  color="yellow" />,
      <SiFirebase size={48}  color="orange" />,
      <SiStyledComponents size={48}  color="gray" />,
      <FaHtml5 size={48}  color="orange" />,
      <FaCss3 size={48}  color="royalblue" />,
    ],
    desc:
      "An app that I've built to get used with firebase and its services (Firestore and Authentication more specifically). I reached the conclusion that it is a great tool (and very easy to learn and implement) for smaller apps that do not need full fledged backends.",
    liveURL: "https://irlgabriel.github.io/library-project-redo/#/",
    codeURL: "https://github.com/irlgabriel/library-project-redo/",
    projectIcon: <FaReact />,
    key: "4",
  },
  {
    name: "CV Generator",
    id: "cv-generator",
    images: 
      { src: require("../../images/cvapp.png"), idx: 0 },
    techIcons: [
      <FaReact  size={48} color="lightblue" />,
      <SiJavascript size={48}  color="yellow" />,
      <SiStyledComponents size={48}  color="gray" />,
      <FaHtml5 size={48}  color="orange" />,
      <FaCss3 size={48}  color="royalblue" />,
    ],
    desc:
      "This app that helped me understand and manage state more easily. I have got a bit of a taste of form client-side validations since it revolves a lot around valid informations being input.",
    liveURL: "https://irlgabriel.github.io/Cv-project",
    codeURL: "https://github.com/irlgabriel/Cv-project",
    projectIcon: <FaReact />,
    key: "5",
  },
  /*
  {
    name: "Netflix Memory Game",
    id: "netflix-memory-game",
    images: 
      { src: require("../../images/memorycardapp.png"), idx: 0 },
    techIcons: [
      <FaReact size={48}  color="lightblue" />,
      <SiJavascript size={48}  color="yellow" />,
      <SiStyledComponents size={48}  color="gray" />,
      <FaHtml5 size={48}  color="orange" />,
      <FaCss3  size={48} color="royalblue" />,
    ],
    desc:
      "More React Hooks practice - A very brief app without any backend (I don't think it is necessary either with this kind of game anyway - maybe just to store the highest-score, but this is not a game that you come back to anyway because it is very boring and the only reason I've built it is to practice React Hooks).",
    liveURL: "https://irlgabriel.github.io/memory-card-game/#/",
    codeURL: "https://github.com/irlgabriel/memory-card-game",
    projectIcon: <FaReact />,
    key: "6",
  },
  */
];

export const technologies = [
  {
    name: 'React',
    icon: <FaReact size="3rem" color='royalblue'/>
  },
  {
    name: 'Ruby on rails',
    icon: <DiRuby size="3rem" color="red"/>
  },
  {
    name: 'nodeJS',
    icon: <FaNode size="3rem" color="lightgreen"/>
  },
  {
    name: 'Express',
    icon: <img src={require("../../images/expressjs-icon.svg")} alt='express-logo' width="48px"/>
  },
  {
    name: 'mongoDB',
    icon: <SiMongodb size="3rem" color="green"/>
  },
  {
    name: 'Heroku',
    icon: <SiHeroku size="3rem" color="purple" />
  }
]