import React from "react";
import {
  FaGithub,
  FaInstagramSquare,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

export const contactLinks = [

  {
    icon: <FaLinkedin color='lightskyblue' size={48}/>,
    name: 'LinkedIn',
    contactLink: "https://www.linkedin.com/in/gabriel-radu-5023021b9/",
    color: "lightblue",
  },
  {
    icon: <AiFillMail color='orange' size={48}/>,
    name: 'Mail',
    contactLink: "mailto: radu.gabriel131@gmail.com",
    color: "gold",
  },
  {
    icon: <FaGithub color='gray' size={48}/>,
    name: 'Github',
    contactLink: "https://github.com/irlgabriel",
    color: "inherit",
  },
  {
    icon: <FaInstagramSquare color='violet' size={48}/>,
    name: 'Instagram',
    contactLink: "https://www.instagram.com/gabriel.radu1/",
    color: "rgba(200,0,60,0.85)",
  },
  {
    icon: <FaFacebookSquare color='royalblue' size={48}/>,
    name: 'Facebook',
    contactLink: "https://www.facebook.com/gabi.radu.75/",
    color: "blue",
  },
];
