import React, { useState, useEffect } from "react";
import { mainProjects } from "./Data";
import { Sidebar, MainProject } from "..";
import { Row, Col, Container } from "reactstrap";
import { Carousel } from "./Projects.components";

export default () => {
  const [slides, setSlides] = useState(mainProjects.length)
  const [slide, setSlide] = useState(0);
  const [animating, setAnimating] = useState(false);

  const handleScroll = (e) => {
    console.log(e);
    if(!animating) {
      if(slide >= slides.length - 1) {
        setAnimating(true);
        setSlide(0);
      } else {
        setSlide(slide + 1);
        setAnimating(true);
      }
    }
  }
  return (
    <Row id="main" className="mx-0 px-0" noGutters={true}>
      <Col className="mx-0 px-0">
        <Carousel onWheel={handleScroll}>
          <MainProject setAnimatingMain={setAnimating} {...mainProjects[slide]} />
        </Carousel>
      </Col>
    </Row>
  );
};
