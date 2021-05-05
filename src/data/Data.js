import React from "react";
import {
  FaGithub,
  FaInstagramSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaSass,
  FaReact,
  FaNode,
  FaBootstrap,
  FaAws,
  FaCss3,
  FaHtml5,
  FaFigma,
  FaMapSigns
} from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
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
  SiVisualstudio,
  SiMaterialUi,
} from "react-icons/si";
import { DiGit } from 'react-icons/di';

// Contact Links
export const contactLinks = [

  {
    icon: <FaLinkedin color='lightskyblue' size='4rem'/>,
    name: 'LinkedIn',
    contactLink: "https://www.linkedin.com/in/gabriel-radu-5023021b9/",
    color: "lightblue",
  },
  {
    icon: <AiFillMail color='orange' size='4rem'/>,
    name: 'Mail',
    contactLink: "mailto: radu.gabriel131@gmail.com",
    color: "gold",
  },
  {
    icon: <FaGithub color='gray' size='4rem'/>,
    name: 'Github',
    contactLink: "https://github.com/irlgabriel",
    color: "inherit",
  },
  /*
  {
    icon: <FaInstagramSquare color='violet' size='4rem'/>,
    name: 'Instagram',
    contactLink: "https://www.instagram.com/gabriel.radu1/",
    color: "rgba(200,0,60,0.85)",
  },
  {
    icon: <FaFacebookSquare color='royalblue' size='4rem'/>,
    name: 'Facebook',
    contactLink: "https://www.facebook.com/gabi.radu.75/",
    color: "blue",
  },
  */
];

export const projects = [
  {
    featured: true,
    name: "Covid-19 Charts",
    images: 
      { src: require("../images/covid19app.png") },
    techIcons: [
      <FaReact size={48}  color="lightskyblue" />,
      <FaBootstrap size={48}  color="purple" />,
      <FaCss3 size={48}  color="royalblue" />,
      <FaHtml5 size={48}  color="red" />,
      <SiJavascript size={48}  color="yellow" />,
      <FaSass size={48}  color="red" />,
    ],
    desc:
      "A React app that consumes a public api to serve covid-19 related data based on country and worldwide. The data is shown in an aesthesically pleasing and intuitive way using recharts npm library.",
    liveURL: "https://irlgabriel.github.io/covid-19-tracker",
    codeURL: "https://github.com/irlgabriel/covid-19-tracker",
    idx: 0,
  },
  {
    featured: true,
    name: "Facebook v2",
    images: 
      { src: require("../images/mern-fb.png"), idx: 0 },      
    techIcons: [
      <FaReact size={48} color='lightskyblue' />,
      <FaBootstrap size={48}  color="purple" />,
      <FaHtml5 size={48}  color="orange" />,
      <FaCss3 size={48}  color="royalblue" />,
      <SiMongodb size={48}  color="green" />,
      <FaAws size={48}  color="yellow" />,
      <SiHeroku size={48}  color="violet" />,
      <SiStyledComponents size={48} color='purple' />,

    ],
    desc:
      "Facebook v2.0. Improved from the first facebook clone built with rails. This one has a custom back-end with express, authentication with JWT, AJAX requests that you can't do with rails alone unless you use a custom frontend framework, smoother animations, better overall UI/UX Experience.",
    liveURL: "https://fcloneodin.herokuapp.com/",
    codeURL: "https://github.com/irlgabriel/MERN-facebook",
    projectIcon: <FaReact size={48}  fontSize="2.5rem" color="royalblue" />,
    idx: 13,
  },

  {
    name: "Weather App",
    images: 
      { src: require("../images/weatherapp.png"), idx: 0 },
    techIcons: [
      <FaReact size={48} color="lightskyblue" />,
      <SiStyledComponents size={48} color="gray" />,
      <SiJavascript  size={48}color="yellow" />,
      <FaHtml5 size={48} color="orange" />,
      <FaCss3 size={48} color="royalblue" />,
    ],
    desc:
      "React app that integrates OpenWeatherMap API and HTML's Geolocation APIs to display weather forecast for the next week based on your location or the city that you input. This was the first app in which I integrated an API and I was introduced to the ways you can send requests in javascript - XMLHttpRequest vs Fetch(newer). I had an idea to make it look better but unfortunately I don't have enough info with any free weather APIs.",
    liveURL: "https://irlgabriel.github.io/weather-app/",
    codeURL: "https://github.com/irlgabriel/weather-app/",
    projectIcon: <FaReact fontSize="2.5rem" color="lightblue" />,
    idx: 10,
  },
  {
    
    id: "facebook-clone",
    name: "Facebook",
    images: 
      { src: require("../images/facebookapp.png"), idx: 0 },      
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
    idx: 3,
  },
  {
    name: "Book Library",
    images: 
      { src: require("../images/libraryapp.png"), idx: 0 },
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
    idx: 4,
  },
  {
    name: "CV Generator",
    images: 
      { src: require("../images/cvapp.png"), idx: 0 },
    techIcons: [
      <FaReact  size={48} color="lightblue" />,
      <SiJavascript size={48}  color="yellow" />,
      <SiStyledComponents size={48}  color="gray" />,
      <FaHtml5 size={48}  color="orange" />,
      <FaCss3 size={48}  color="royalblue" />,
    ],
    desc:
      "This app helped me understand and manage state more easily. I have got a bit of a taste of form client-side validations since it revolves a lot around valid informations being input.",
    liveURL: "https://irlgabriel.github.io/Cv-project",
    codeURL: "https://github.com/irlgabriel/Cv-project",
    projectIcon: <FaReact />,
    idx: 5,
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
    idx: "6",
  },
  */
];

export const technologies = [
  {
    type: 'framework',
    name: 'React',
    icon: <FaReact size="144px" color='royalblue'/>
  },
  {
    type: 'framework',
    name: 'Ruby on rails',
    icon: <DiRuby size="144px" color="red"/>
  },
  {
    type: 'language',
    name: 'nodeJS',
    icon: <FaNode size="144px" color="lightgreen"/>
  },
  {
    type: 'framework',
    name: 'Express',
    icon: <img src={require("../images/expressjs-icon.svg")} alt='express-logo' width="90px"/>
  },
  {
    type: 'language',
    name: 'HTML5',
    icon: <FaHtml5 size='144px'  color="red" />,
  },
  {
    type: 'language',
    name: 'CSS3',
    icon: <FaCss3 size='144px' color='royalblue' />
  },
  {
    type: 'framework',
    name: 'Sass',
    icon: <FaSass size='144px'  color="red" />,
  },
  {
    type: 'framework',
    name: 'Bootstrap',
    icon: <FaBootstrap size='144px' color='purple' />,
  },
  {
    type: 'framework',
    name: 'MaterialUI',
    icon: <SiMaterialUi size='144px' color='black' />
  },
  /**Tools */

  {
    type: 'tool',
    name: 'Heroku',
    icon: <SiHeroku size="4rem" color="purple" />
  },
  {
    type: 'tool',
    name: 'Github',
    icon: <FaGithub size='4rem' color='black' />
  },
  {
    type: 'tool',
    name: 'Visual Studio Code',
    icon: <SiVisualstudio size='4rem' color='blue' />
  },
  {
    type: 'tool',
    name: 'Figma',
    icon: <FaFigma size='4rem' color='lightskyblue' />
  },
  {
    type: 'tool',
    name: 'Git',
    icon: <DiGit size='4rem' color='black' />
  },
  /**Services */
  {
    type: 'service',
    name: 'PostgreSQL',
    icon: <SiPostgresql size='4rem' color='purple' />,
  },
  {
    type: 'service',
    name: 'mongoDB',
    icon: <SiMongodb size="4rem" color="green"/>
  },
  {
    type: 'service',
    name: 'Amazon Web Services(S3)',
    icon: <FaAws size='4rem' color='orange' />
  },
  {
    type: 'service',
    name: 'Firebase',
    icon: <SiFirebase size='4rem' color='orange' />
  },
]

export const altSkills = [
  {
    title: 'Work Stack',
    align: 'center',
    icons: [
      <FaMapSigns size='144px' />
    ],
  },
  {
    title: 'Frontend',
    align: 'flex-start',
    icons: [
      <FaReact size='144px' color='royalblue' />
    ],
  },
  {
    title: 'Backend',
    align: 'flex-end',
    icons: [
      <FaNode size='144px' color='green' />,
      <img src={require("../images/expressjs-icon.svg")} alt='express'/>,
      <SiMongodb size='144px' color='green' />,
    ]
  },
  {
    title: 'Styling',
    align: 'flex-start',
    icons: [
      <SiMaterialUi size='144px' color='black' />,
      <FaSass size='144px' color='lightcoral' />
    ]
  }
]