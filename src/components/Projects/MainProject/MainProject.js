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
    <Row className="project-row" id={id}>
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
        <Row noGutters>
          <Container fluid className="flex-wrap d-flex align-items-center px-0">
            <h3 className="mb-0">{name}</h3>
            {techIcons.map((icon) => (
              <span className="mx-2" style={{ fontSize: "2rem" }}>
                {icon}
              </span>
            ))}
          </Container>
          <Col className="my-2 border-left-radius-5 border text-center text-dark ">
            <ListGroupItem
              style={{
                borderRight: "1px solid white",
              }}
              tag="a"
              href={liveURL}
              action
            >
              <span className="font-weight-bold">Live</span>
            </ListGroupItem>
          </Col>
          <Col className="my-2 border-right-radius-5 border text-center text-dark ">
            <ListGroupItem tag="a" href={codeURL} action>
              <span className="font-weight-bold">Code</span>
            </ListGroupItem>
          </Col>
          <p className="py-2 px-2">{desc}</p>
        </Row>
      </Col>
    </Row>
  );
}
