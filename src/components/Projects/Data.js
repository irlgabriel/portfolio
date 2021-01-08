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
  SiRedux,
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
      <FaReact size={32}  color="lightblue" />,
      <FaBootstrap size={32}  color="purple" />,
      <FaCss3 size={32}  color="royalblue" />,
      <FaHtml5 size={32}  color="red" />,
      <SiJavascript size={32}  color="yellow" />,
      <FaSass size={32}  color="red" />,
    ],
    desc:
      "A react app that takes data from two different APIs and uses Recharts npm library to display some (hopefully useful) charts with Covid-19 information around the world. ",
    liveURL: "https://irlgabriel.github.io/covid-19-tracker",
    codeURL: "https://github.com/irlgabriel/covid-19-tracker",
    key: "0",
  },
  {
    id: "facebook-clone-mern",
    name: "MERN-facebook",
    images: 
      { src: require("../../images/mern-fb.png"), idx: 0 },      
    techIcons: [
      <FaReact size={32} color='royalblue' />,
      <FaBootstrap size={32}  color="purple" />,
      <FaHtml5 size={32}  color="orange" />,
      <FaCss3 size={32}  color="royalblue" />,
      <SiMongodb size={32}  color="green" />,
      <FaAws size={32}  color="yellow" />,
      <SiHeroku size={32}  color="violet" />,
      <SiStyledComponents csize={32} color='purple' />,

    ],
    desc:
      "Facebook v2.0. Improved from the first facebook done with rails. This one has a custom back-end with express, authentication with JWT, AJAX requests that you can't do with rails alone, smooth animations, smoother overall UI experience.",
    liveURL: "https://fcloneodin.herokuapp.com/",
    codeURL: "https://github.com/irlgabriel/MERN-facebook",
    projectIcon: <FaReact size={32}  fontSize="2.5rem" color="royalblue" />,
    key: "8",
  },
  {
    id: "facebook-clone",
    name: "Rails-Facebook",
    images: 
      { src: require("../../images/facebookapp.png"), idx: 0 },      
    techIcons: [
      <SiRails size={32}  color="red" />,
      <DiRuby size={32}  color="red" />,
      <FaBootstrap size={32}  color="purple" />,
      <FaHtml5 size={32}  color="orange" />,
      <FaCss3 size={32}  color="royalblue" />,
      <SiPostgresql size={32}  color="green" />,
      <FaAws size={32}  color="yellow" />,
      <SiHeroku size={32}  color="violet" />,
    ],
    desc:
      "A facebook clone built with ruby on rails. This was a great challenge for me, I learned a lot about Rails' Model-View-Controller arhitecture, Forms, HTTP requests, Relational Databases, Schemas and so much more. By far the greatest challenge was figuring out how to add the Friend Request and Notification features, with a very close second being rails' database associations.",
    liveURL: "https://whispering-bayou-85275.herokuapp.com/",
    codeURL: "https://github.com/irlgabriel/facebook-odin",
    projectIcon: <DiRuby size={32}  fontSize="2.5rem" color="red" />,
    key: "1",
  },
  {
    name: "Weather App",
    id: "weather-app",
    images: 
      { src: require("../../images/weatherapp.png"), idx: 0 },
    techIcons: [
      <FaReact size={32} color="lightblue" />,
      <SiStyledComponents size={32} color="gray" />,
      <SiJavascript  size={32}color="yellow" />,
      <FaHtml5 size={32} color="orange" />,
      <FaCss3 size={32} color="royalblue" />,
    ],
    desc:
      "React app that integrates OpenWeatherMap API and HTML's Geolocation API to display weather forecast for the next week based on your location or the city that you input. This was the first app in which I integrated an API and I was introduced to the ways you can send requests in javascript - XMLHttpRequest vs Fetch(newer). I had an idea to make it look better but unfortunately I don't have enough info with any free weather APIs.",
    liveURL: "https://irlgabriel.github.io/weather-app/",
    codeURL: "https://github.com/irlgabriel/weather-app/",
    projectIcon: <FaReact fontSize="2.5rem" color="lightblue" />,
    key: "2",
  },
  {
    name: "MERN Shopping List",
    id: "mern-app",
    images: 
      { src: require("../../images/mernapp.png"), idx: 0 },
    techIcons: [
      <FaNode size={32} color="green" />,
      <SiMongodb size={32} color="olivedrab" />,
      //"Express.js",
      //"JWT Auth",
      <FaReact  size={32}color="lightblue" />,
      <SiRedux size={32} color="purple" />,
      <SiHeroku size={32} color="pink" />,
      <SiJavascript size={32} color="yellow" />,
      <FaBootstrap size={32} color="purple" />,
      <FaHtml5 size={32} color="orange" />,
      <FaCss3  size={32}color="royalblue" />,
    ],
    desc:
      "A simple shopping list built with the MERN stack. I know it is pointless(the app in itself too) and overkill to have a custom back-end for such an app while I could have used firebase or other BaaS but I created this one to get familiar with node, Express and mongoDB. I plan to turn it into a e-commerce style website with items and a shopping cart in the future. Oh and it also has custom JWT Authentication on the backend!",
    liveURL: "https://tranquil-anchorage-36599.herokuapp.com",
    codeURL: "https://github.com/irlgabriel/mern-shopping-list",
    projectIcon: <FaNode fontSize="2.5rem" color="lightgreen" />,
    key: "3",
  },
  {
    name: "Book Library",
    id: "book-library",
    images: 
      { src: require("../../images/libraryapp.png"), idx: 0 },
    alt: "Photo of library project",
    projectTitle: "Library",
    techIcons: [
      <FaReact size={32}  color="lightblue" />,
      <SiReactrouter size={32}  />,
      <SiJavascript size={32}  color="yellow" />,
      <SiFirebase size={32}  color="orange" />,
      <SiStyledComponents size={32}  color="gray" />,
      <FaHtml5 size={32}  color="orange" />,
      <FaCss3 size={32}  color="royalblue" />,
    ],
    desc:
      "A small app that I've built to get used with firebase and its services (firestore and auth more specifically). I reached the conclusion that it is a great tool (and very easy to learn and implement) for smaller apps that do not need full fledged backends.",
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
      <FaReact  size={32} color="lightblue" />,
      <SiJavascript size={32}  color="yellow" />,
      <SiStyledComponents size={32}  color="gray" />,
      <FaHtml5 size={32}  color="orange" />,
      <FaCss3 size={32}  color="royalblue" />,
    ],
    desc:
      "Just a small app that helped me understand and manage state more easily. I have got a bit of a taste of form client-side validations since it revolves a lot around valid informations being input.",
    liveURL: "https://irlgabriel.github.io/Cv-project",
    codeURL: "https://github.com/irlgabriel/Cv-project",
    projectIcon: <FaReact />,
    key: "5",
  },
  {
    name: "Netflix Memory Game",
    id: "netflix-memory-game",
    images: 
      { src: require("../../images/memorycardapp.png"), idx: 0 },
    techIcons: [
      <FaReact size={32}  color="lightblue" />,
      <SiJavascript size={32}  color="yellow" />,
      <SiStyledComponents size={32}  color="gray" />,
      <FaHtml5 size={32}  color="orange" />,
      <FaCss3  size={32} color="royalblue" />,
    ],
    desc:
      "More React Hooks practice - A very brief app without any backend (I don't think it is necessary either with this kind of game anyway - maybe just to store the highest-score, but this is not a game that you come back to anyway because it is very boring and the only reason I've built it is to practice React Hooks).",
    liveURL: "https://irlgabriel.github.io/memory-card-game/#/",
    codeURL: "https://github.com/irlgabriel/memory-card-game",
    projectIcon: <FaReact />,
    key: "6",
  },
];

export const technologies = [
  {
    name: 'React',
    icon: <FaReact size="2rem" color='royalblue'/>
  },
  {
    name: 'Ruby on rails',
    icon: <DiRuby size="2rem" color="red"/>
  },
  {
    name: 'nodeJS',
    icon: <FaNode size="2rem" color="lightgreen"/>
  },
  {
    name: 'Express',
    icon: <img src={require("../../images/expressjs-icon.svg")} width="32px"/>
  },
  {
    name: 'mongoDB',
    icon: <SiMongodb size="2rem" color="green"/>
  },
  {
    name: 'Heroku',
    icon: <SiHeroku size="2rem" color="purple" />
  }
]