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
    contactLink: "https://www.linkedin.com/in/gabriel-radu-5023021b9/",
    color: "lightblue",
  },
  {
    icon: <AiFillMail />,
    contactLink: "mailto: radu.gabriel131@gmail.com",
    color: "gold",
  },
  {
    icon: <FaGithub />,
    contactLink: "https://github.com/irlgabriel",
    color: "inherit",
  },
  {
    icon: <FaInstagramSquare />,
    contactLink: "https://www.instagram.com/gabriel.radu1/",
    color: "rgba(200,0,60,0.85)",
  },
  {
    icon: <FaFacebookSquare />,
    contactLink: "https://www.facebook.com/gabi.radu.75/",
    color: "blue",
  },
];
