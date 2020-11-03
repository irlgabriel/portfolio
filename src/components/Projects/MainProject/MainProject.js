import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
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
      <Container onMouseEnter={() => setMouse(true)} onMouseLeave={() => setMouse(false)} fluid id="image-container">
        <img src={images.src} className="project-image" />
          <CSSTransition
            in={isMouseInside}
            timeout={500}
            classNames="fade2"
            unmountOnExit
          >
            <Container className="hover-info" id={`hover-info-${id}`} fluid>
              <div className="image-overlay"></div>
              <h3 className="project-title">{name}</h3>
              <div className="tech-icons-container">
                {techIcons.map((icon) => (
                  <i className="tech-icon">{icon}</i>
                ))}
              </div>
              <p>{desc}</p>
              <Row className="code-links" noGutters>
                <Col tag="a" href={liveURL} noGutters xs={2} className="ml-auto project-link">
                  Live
                </Col>
                <Col tag="a" href={codeURL} noGutters xs={2} className="project-link">
                  Code
                </Col>
              </Row>
            </Container>
          </CSSTransition>
        
      </Container>
    </Container>
  );
}
