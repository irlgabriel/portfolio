import React, { useState } from "react";
import {
  Container,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselControl,
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  CardSubtitle,
  CardFooter
} from "reactstrap"


export default function MainProject() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const items = [
    {
      src: require("../../images/facebook2.png")
    },
    {
      src: require("../../images/facebook3.png")
    },
    {
      src: require("../../images/facebook4.png")
    },
  ]

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }


  return (
    <Container className="px-0" fluid={true}>
      <h2 className="text-center">Facebook clone</h2>
      <Carousel
      interval={false}
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {
        items.map((item) => {
          return (
            <CarouselItem
              
              onExiting={() => setAnimating(true)}
              onExited={() => setAnimating(false)}
              key={item.src}
            >
              <img src={item.src} />
            </CarouselItem>
          );
        })
      }
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      <Card className="text-light mt-2" style={{background: "transparent"}}>
        <CardHeader>
          <CardTitle className="h3">Facebook clone</CardTitle>
          <CardSubtitle>Ruby on Rails</CardSubtitle>
        </CardHeader>
        <CardBody>
        {/* Description */}
          <p>A facebook clone built with ruby on rails. This was a
            great challenge for me, I learned a lot of about Rails' 
            Model-View-Controller arhitecture, Forms, HTTP requests, 
            Relational Databases and so much more.
          </p>
        </CardBody>
        <CardFooter>

        </CardFooter>
      </Card>
    </Container>
  )
}