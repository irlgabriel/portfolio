import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselControl,
  ListGroupItem,
  Card, 
  CardBody,
  CardTitle,
  CardHeader,
  CardSubtitle,
  CardFooter,
  Row,
  Col,
} from "reactstrap";
import { ImageContainer } from "./Mainproject.components";


export default function MainProject({ images, id, name, techIcons, desc, liveURL, codeURL, setParentAnimating }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  return (
    <Card
      id={id}
      className="card mt-2 p-relative"
      style={{ background: "transparent" }}
    >
      <CardHeader>
        <CardTitle className="d-inline-block h3">{name}</CardTitle>
        {techIcons.map((icon) => (
          <span className="mx-2" style={{ fontSize: "2rem" }}>
            {icon}
          </span>
        ))}
        <CardSubtitle className="mb-3"></CardSubtitle>
        {
        <Carousel
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
        }
      </CardHeader>
      <CardBody>
        <p>{desc}</p>
      </CardBody>
      <CardFooter>
        <Row noGutters className="mx-0">
          <Col className="border-left-radius-5 text-center text-dark ">
            <ListGroupItem
              style={{
                borderRight: "1px solid white",
                backgroundColor: "darkslategray",
              }}
              className="text-light"
              tag="a"
              href={liveURL}
              action
            >
              <span className="font-weight-bold">Live</span>
            </ListGroupItem>
          </Col>
          <Col className="border-right-radius-5 text-center text-dark ">
            <ListGroupItem
              style={{ backgroundColor: "darkslategray" }}
              className="text-light"
              tag="a"
              href={codeURL}
              action
            >
              <span className="font-weight-bold">Code</span>
            </ListGroupItem>
          </Col>
        </Row>
      </CardFooter>
    </Card>
  );
}
