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
      <ListGroup horizontal="sm">
        <ListGroupItem className="px-0" tag="a" href="https://github.com/irlgabriel" action>
          <span className="mx-auto"><FaGithub />&nbsp;
          Github</span>
        </ListGroupItem>
        <ListGroupItem className="px-0"  tag="a" href="https://www.instagram.com/gabriel.radu1/" action>
          <span className="mx-auto"><FaInstagramSquare />&nbsp;
          Instagram</span>
        </ListGroupItem>
        <ListGroupItem className="px-0"  tag="a" href="https://www.facebook.com/gabi.radu.75/" action>
          <span className="mx-auto"><FaFacebookSquare />&nbsp;
          Facebook</span>
        </ListGroupItem>
        <ListGroupItem className="px-0"  tag="a" href="mailto: radu.gabriel131@gmail.com" action>
          <span className="mx-auto"><AiFillMail />&nbsp;
          Mail</span>
        </ListGroupItem>
        <ListGroupItem className="px-0"  tag="a" href="https://www.linkedin.com/in/gabriel-radu-5023021b9/" action>
          <span className="mx-auto"><FaLinkedin />&nbsp;
          LinkedIn</span>
        </ListGroupItem>
      </ListGroup>

    </Container>
  );
}
