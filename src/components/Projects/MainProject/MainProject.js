import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col
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
  const [styles, setStyles] = useState({display: "none"});

  useEffect(() => {
    if(!isMouseInside) {
      setStyles({display: "none"})
    } else {
      setStyles({display: "block"})
    }
  },[isMouseInside])
  return (
    <Container fluid className="project-slide" id={id}>
      <Container onMouseEnter={() => setMouse(true)} onMouseLeave={() => setMouse(false)} fluid id="image-container">
        {
          isMouseInside && 
            <div className="image-overlay"></div>
        }
          <img src={images.src} className="project-image" />
        {
        <Container style={styles} className="hover-info" id={`hover-info-${id}`} fluid>
          <h3 className="font-weight-bold mb-0">{name}</h3>
          {techIcons.map((icon) => (
            <i className="tech-icon">{icon}</i>
          ))}
          <Row id="code-links" noGutters>
            <Col noGutters xs={2} className="project-link">
              <a href={liveURL}>
                <span className="font-weight-bold">Live</span>
              </a>
            </Col>
            <Col noGutters xs={2} className="project-link">
              <a href={codeURL}>
                <span className="font-weight-bold">Code</span>
              </a>
            </Col>
          </Row>
        <p>{desc}</p>
        </Container>
        }
      </Container>
    </Container>
  );
}
