import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselControl,
  ListGroupItem,
  Row,
  Container,
  Col,
  Toast,
} from "reactstrap";
import { ImageContainer } from "./Mainproject.components";

export default function MainProject({
  images,
  id,
  name,
  techIcons,
  desc,
  liveURL,
  codeURL,
  setParentAnimating,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  return (
    <Row className="project-row text-light" id={id}>
      <Col xs="12" sm="6" className="project-carousel-col">
        <Carousel
          style={{ width: "400px" }}
          interval={false}
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          <CarouselIndicators
            items={images}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {images.map((img) => {
            return (
              <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={img.src}
              >
                <ImageContainer src={img.src} />
              </CarouselItem>
            );
          })}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </Col>
      <Col xs="12" sm="6" className="project-info-col">
        <div className="blurred-background"></div>
        <Row noGutters>
          <Container fluid className="ml-2 mb-2 flex-wrap d-flex align-items-center px-0">
            <h3 className="font-weight-bold mb-0">{name}</h3>
            {techIcons.map((icon) => (
              <i className="mx-2">{icon}</i>
            ))}
          </Container>
          <Col xs={2} className="project-link">
            <a href={liveURL}>
              <span className="font-weight-bold">Live</span>
            </a>
          </Col>
          <Col xs={2} className="project-link">
            <a href={codeURL}>
              <span className="font-weight-bold">Code</span>
            </a>
          </Col>
          <p className="py-2 px-2">{desc}</p>
        </Row>
      </Col>
    </Row>
  );
}
