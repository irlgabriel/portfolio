import React, { useState } from "react";
import { Zoom } from "react-reveal"
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
  Col
} from "reactstrap"
import {
  ImageContainer
} from "./Mainproject.components"


export default function MainProject(
  project
) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const projectImages = project.images

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === projectImages.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? projectImages.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }


  return (
    <Zoom>
    <Card id={project.id} className="card text-light mt-2" style={{background: "transparent"}}>
      <CardHeader>
        <CardTitle className="d-inline-block h3">{project.name}</CardTitle>
          {project.techIcons.map(icon => <span className="mx-2" style={{fontSize: "2rem"}}>{icon}</span>)}
        <CardSubtitle></CardSubtitle>
        <Carousel
        interval={false}
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        >
        <CarouselIndicators items={projectImages} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {
          projectImages.map((img) => {
            return (
              <CarouselItem
                
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={img.src}
              >
                <ImageContainer src={img.src} />
              </CarouselItem>
            );
          })
        }
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
      </CardHeader>
      <CardBody>
        {/* Description */}
        <p>{project.desc}
        </p>
      </CardBody>
      <CardFooter>
        <Row noGutters className="mx-0">
          <Col className="mx-0" className="border-left-radius-5 text-center text-dark ">
            <ListGroupItem tag="a" href={project.liveURL} action>
              <span className="">Live</span>
              </ListGroupItem>
          </Col>
          <Col className="mx-0" className="border-right-radius-5 text-center text-dark ">
            <ListGroupItem tag="a" href={project.codeURL} action>Code</ListGroupItem>
          </Col>
        </Row>
      </CardFooter>
    </Card>
    </Zoom>
  )
}