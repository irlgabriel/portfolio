import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { BsArrowUpDown } from "react-icons/bs"
import { ImageContainer } from "./Mainproject.components";
import {
  Container,
  Row,
  Col,
} from "reactstrap";

export default function MainProject({
  images,
  id,
  name,
  techIcons,
  desc,
  liveURL,
  codeURL,
}) {
  const [isMouseInside, setMouse] = useState(false);

  return (
    <Container fluid className="project-slide" id={id}>
      <ImageContainer src={images.src} onMouseEnter={() => setMouse(true)} onMouseLeave={() => setMouse(false)}>
          <CSSTransition
            in={isMouseInside}
            timeout={500}
            classNames="fade2"
            unmountOnExit
          >
            <Container className="hover-info" id={`hover-info-${id}`} fluid>
              <div className="image-overlay"></div>
              <h3 style={{lineHeight: "1",marginBottom: "0" }} className="project-title">{name}</h3>
              <hr className='my-2' style={{background: 'white'}} />
              <div className="tech-icons-container">
                {techIcons.map((icon, index) => (
                  <i key={index} className="tech-icon">{icon}</i>
                ))}
              </div>
              <p className="project-desc">{desc}</p>
              <Row className="code-links" noGutters>
                <Col tag="a" href={liveURL} xs={2} className="ml-auto project-link">
                  Live
                </Col>
                <Col tag="a" href={codeURL} xs={2} className="project-link">
                  Code
                </Col>
              </Row>
            </Container>
          </CSSTransition>
        
      </ImageContainer>
    </Container>
  );
}
