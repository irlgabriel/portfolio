import React, { useState } from "react";
import { mainProjects } from "./Data";
import { Sidebar, MainProject } from "..";
import { Row, Col, Container } from "reactstrap";
import { Carousel } from "./Projects.components";

export default () => {
  const [slides, setSlides] = useState(mainProjects.length)
  const [slide, setSlide] = useState(0);
  return (
    <Row id="main" className="mx-0 px-0" noGutters={true}>
      <Col className="mx-0 px-0">
        <Carousel>
          {mainProjects.map((project) => (
            <MainProject {...project} />
          ))}
        </Carousel>
      </Col>
    </Row>
  );
};
