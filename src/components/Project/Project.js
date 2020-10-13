import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  ProjectContainer,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  SubtitleItem,
  Features,
  ProjectHeader,
  ProjectLink,
  ProjectIcon,
  CarouselDiv,

} from "./Project.components";
export default function Project({
  bgColor,
  textColor,
  images,
  alt,
  projectTitle,
  headingContent,
  subtitleContent,
  imageLeft,
  smallDesc,
  features,
  liveURL,
  codeURL,
  projectIcon,
  projectIconColor,
  slides,
  id,
  idx
  
}) {
  return (
    <ProjectContainer imageLeft={imageLeft} bgColor={bgColor} textColor={textColor}>
      <InfoColumn>
        <TextWrapper>
          <ProjectHeader>
            <ProjectIcon color={projectIconColor}>{projectIcon}</ProjectIcon>
            <TopLine>{projectTitle}</TopLine>
            <ProjectLink bgColor={bgColor} href={liveURL}>Live</ProjectLink>
            <ProjectLink bgColor={bgColor} href={codeURL}>Code</ProjectLink>
          </ProjectHeader>
         <Heading>{smallDesc}</Heading>
          <Features>{features}</Features>
          <Heading>{headingContent}</Heading>
          {
            subtitleContent.map(item => <SubtitleItem>{item}</SubtitleItem>)
          }
        </TextWrapper>
      </InfoColumn>
      <CarouselDiv>
        <CarouselProvider
          naturalSlideWidth={350}
          naturalSlideHeight={350}
          totalSlides={slides}
        >
          <Slider className="slider">
            {
              images.map(obj => 
                <Slide index={obj.idx}>
                  <Image src={obj.src} />
                </Slide> 
              )
            }
          </Slider >
          <ButtonBack className="slider-button">Back</ButtonBack>
          <ButtonNext className="slider-button">Next</ButtonNext>
      
        </CarouselProvider>
      </CarouselDiv>
      
    </ProjectContainer>
  )
}