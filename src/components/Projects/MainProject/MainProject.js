import React from "react";
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
  return (
    <Container fluid className="project-slide" id={id}>
      <Container fluid id="image-container">
        <img src={images.src} className="project-image" />
        <Container id="hover-info" fluid>
          <h3 className="font-weight-bold mb-0">{name}</h3>
          {techIcons.map((icon) => (
            <i className="tech-icon">{icon}</i>
          ))}
          <Row noGutters>
            <Col noGutters   xs={2} className="project-link">
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
      </Container>
    </Container>
  );
}
