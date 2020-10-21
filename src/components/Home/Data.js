import React from "react";
import { FaReact, FaNode, FaBootstrap, FaAws, FaCss3, FaHtml5 } from "react-icons/fa";
import { DiRuby } from "react-icons/di";
import { SiHeroku, SiReactrouter, SiPostgresql, SiJavascript, SiRedux, SiMongodb, SiFirebase, SiRails, SiStyledComponents} from "react-icons/si"

export const mainProjects = [
  { 
    id: "facebook-clone",
    name: "Facebook Clone",
    images: [
      { src: require("../../images/facebook6.png"), idx: 0 },
      { src: require("../../images/facebook2.png"), idx: 1 },
      { src: require("../../images/facebook3.png"), idx: 2 },
      { src: require("../../images/facebook4.png"), idx: 3 },
      { src: require("../../images/facebook5.png"), idx: 4 },
    ],
    techIcons: [
      <SiRails color="red"/>,
      <DiRuby color="red" />,
      <FaBootstrap color="purple"/>,
      <FaHtml5 color="orange"/>,
      <FaCss3 color="blue"/>,
      <SiPostgresql color="green"/>,
      <FaAws color="yellow"/>,
      <SiHeroku color="violet"/>,
    ],
    desc: "A facebook clone built with ruby on rails. This was a great challenge for me, I learned a lot about Rails' Model-View-Controller arhitecture, Forms, HTTP requests, Relational Databases, Schemas and so much more. By far the greatest challenge was figuring out how to add the Friend Request and Notification features, with a very close second being rails' database associations.",
    liveURL: "https://whispering-bayou-85275.herokuapp.com/",
    codeURL: "https://github.com/irlgabriel/facebook-odin",
    projectIcon: <DiRuby fontSize="2.5rem" color="red"/>,
    key: "1",
  },
  {
    name: "Weather App",
    id: "weather-app",
    images: [
      { src: require("../../images/weather2.png"), idx: 0 },
      { src: require("../../images/weather3.png"), idx: 1 },
      { src: require("../../images/weather4.png"), idx: 2 },
    ],
    techIcons: [
      <FaReact color="lightblue"/>,
      <SiStyledComponents color="gray"/>,
      <SiJavascript color="yellow"/>,
      <FaHtml5 color="orange"/>,
      <FaCss3 color="blue"/>,
    ],
    desc: "An ugly weather app that integrates OpenWeatherMap API and HTML's Geolocation API to display weather forecast for the next week based on your location or the city that you input. This was the first app in which I integrated an API and I was introduced to the ways you can send requests in javascript - XMLHttpRequest vs Fetch(newer).",
    liveURL: "https://irlgabriel.github.io/weather-app/",
    codeURL: "https://github.com/irlgabriel/weather-app/",
    projectIcon: <FaReact fontSize="2.5rem" color="lightblue"/>,
    key: "2",
  },
  {
    name: "MERN Shopping List",
    id: "mern-app",
    images: [
      { src: require("../../images/mern1.png"), idx: 0 },
      { src: require("../../images/mern2.png"), idx: 1 },
    ],
    techIcons: [
      <FaNode color="green"/>,
      <SiMongodb color="olivedrab"/>,
      //"Express.js",
      //"JWT Auth",
      <FaReact color="lightblue"/>,
      <SiRedux color="purple"/>,
      <SiHeroku color="pink"/>,
      <SiJavascript color="yellow"/>,
      <FaBootstrap color="purple"/>,
      <FaHtml5 color="orange"/>,
      <FaCss3 color="blue"/>,
    ],
    desc: "A simple shopping list built with the MERN stack. I know it is pointless(the app in itself) and overkill to have a custom back-end for such an app while I could have used firebase or other BaaS but I created this one to get familiar with node, Express and mongoDB. I plan to turn it into a e-commerce style website with items and a shopping cart in the future. Oh and it also has custom JWT Authentication on the backend!",
    liveURL: "https://tranquil-anchorage-36599.herokuapp.com",
    codeURL: "https://github.com/irlgabriel/mern-shopping-list",
    projectIcon: <FaNode fontSize="2.5rem" color="lightgreen"/>,
    key: "3",
  },
  {
    name: "Book Library",
    id: "book-library",
    images: [
      { src: require("../../images/library3.png"), idx: 0 },
      { src: require("../../images/library4.png"), idx: 1 },
      { src: require("../../images/library5.png"), idx: 2 },
    ],
    alt: "Photo of library project",
    projectTitle: "Library",
    techIcons: [
      <FaReact color="lightblue"/>,
      <SiReactrouter />,
      <SiJavascript color="yellow"/>,
      <SiFirebase color="orange"/>,
      <SiStyledComponents color="gray"/>,
      <FaHtml5 color="orange"/>,
      <FaCss3 color="blue"/>,
    ],
    desc: "A small app that I've built to get used with firebase and its services (firestore and auth more specifically). I reached the conclusion that it is a great tool (and very easy to learn and implement) for smaller apps that do not need full fledged backends.",
    liveURL: "https://irlgabriel.github.io/library-project-redo/#/",
    codeURL: "https://github.com/irlgabriel/library-project-redo/",
    projectIcon: <FaReact />,
    key: "4",
  },
  {
    name: "CV Generator",
    id: "cv-generator",
    images: [
      { src: require("../../images/project3.png"), idx: 0 },
      { src: require("../../images/cv2.png")}
  ],
    techIcons: [
      <FaReact color="lightblue"/>,
      <SiJavascript color="yellow"/>,
      <SiStyledComponents color="gray"/>,
      <FaHtml5 color="orange"/>,
      <FaCss3 color="blue"/>,
    ],
    desc: "Just a small app that helped me understand and manage state more easily. I have got a bit of a taste of form client-side validations since it revolves a lot around valid informations being input.",
    liveURL: "https://irlgabriel.github.io/Cv-project",
    codeURL: "https://github.com/irlgabriel/Cv-project",
    projectIcon: <FaReact />,
    key: "5",
  },
  {
    name: "Netflix Memory Game",
    id: "netflix-memory-game",
    images: [
      { src: require("../../images/memory-game.png"), idx: 0 },
      { src: require("../../images/memory-game-2.png"), idx: 1 },
      { src: require("../../images/memory-game-3.png"), idx: 2 },
    ],
    techIcons: [
      <FaReact color="lightblue"/>,
      <SiJavascript color="yellow"/>,
      <SiStyledComponents color="gray"/>,
      <FaHtml5 color="orange"/>,
      <FaCss3 color="blue"/>,
    ],
    desc:
      "More React Hooks practice - A very brief app without any backend (I don't think it is necessary either with this kind of game anyway - maybe just to store the highest-score, but this is not a game that you come back to anyway because it is very boring and the only reason I've built it is to practice React Hooks).",
    liveURL: "https://irlgabriel.github.io/memory-card-game/#/",
    codeURL: "https://github.com/irlgabriel/memory-card-game",
    projectIcon: <FaReact />,
    key: "6",
  },
  
];
