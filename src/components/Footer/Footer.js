import React from "react";
import { FaGithub, FaInstagramSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { 
  Container,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

export default function Footer() {
  const contacts = [
    { icon: <FaGithub />, contactLink: "https://github.com/irlgabriel", color: "inherit" },
    { icon: <FaLinkedin />, contactLink: "https://www.linkedin.com/in/gabriel-radu-5023021b9/", color: "lightblue" },
    { icon: <AiFillMail />, contactLink: "mailto: radu.gabriel131@gmail.com", color: "gold" },
    { icon: <FaInstagramSquare />, contactLink: "https://www.instagram.com/gabriel.radu1/", color: "red" },
    { icon: <FaFacebookSquare />, contactLink: "https://www.facebook.com/gabi.radu.75/", color: "blue" },
  ]
  return (
    <Container style={{borderTop: "1px solid darkslategray"}} fluid={true} className="bg-dark py-4 p-3">
      <ListGroup id="footer" className="mx-auto" horizontal="sm">
        {
          contacts.map((obj, index) =>
            <ListGroupItem key={index} style={{ fontSize: "2rem", color: obj.color, background: obj.bg }} className="text-center py-1 px-0" tag="a" href={obj.contactLink} action>
              {obj.icon}
            </ListGroupItem>
          )
        }
      </ListGroup>
    </Container>
  );
}
