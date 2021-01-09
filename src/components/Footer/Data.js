import React from "react";
import {
  FaGithub,
  FaInstagramSquare,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

export const contacts = [

  {
    icon: <FaLinkedin />,
    name: 'LinkedIn',
    contactLink: "https://www.linkedin.com/in/gabriel-radu-5023021b9/",
    color: "lightblue",
  },
  {
    icon: <AiFillMail />,
    name: 'Mail',
    contactLink: "mailto: radu.gabriel131@gmail.com",
    color: "gold",
  },
  {
    icon: <FaGithub />,
    name: 'Github',
    contactLink: "https://github.com/irlgabriel",
    color: "inherit",
  },
  {
    icon: <FaInstagramSquare />,
    name: 'Instagram',
    contactLink: "https://www.instagram.com/gabriel.radu1/",
    color: "rgba(200,0,60,0.85)",
  },
  {
    icon: <FaFacebookSquare />,
    name: 'Facebook',
    contactLink: "https://www.facebook.com/gabi.radu.75/",
    color: "blue",
  },
];
