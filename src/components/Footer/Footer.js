import React from "react";
import { FaGithub, FaInstagramSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { 
  Container,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading
} from "reactstrap";

export default function Footer() {
  return (
    <Container fluid={true} className="bg-dark p-3">
      <ListGroup className="w-75 mx-auto" horizontal="sm">
        <ListGroupItem tag="a" href="https://github.com/irlgabriel" action>
          <FaGithub />&nbsp;
          Github
        </ListGroupItem>
        <ListGroupItem tag="a" href="https://www.instagram.com/gabriel.radu1/" action>
          <FaInstagramSquare />&nbsp;
          Instagram
        </ListGroupItem>
        <ListGroupItem tag="a" href="https://www.facebook.com/gabi.radu.75/" action>
          <FaFacebookSquare />&nbsp;
          Facebook
        </ListGroupItem>
        <ListGroupItem tag="a" href="mailto: radu.gabriel131@gmail.com" action>
          <AiFillMail />&nbsp;
          Mail
        </ListGroupItem>
        <ListGroupItem tag="a" href="https://www.linkedin.com/in/gabriel-radu-5023021b9/" action>
          <FaLinkedin />&nbsp;
          LinkedIn
        </ListGroupItem>
      </ListGroup>

    </Container>
  );
}
