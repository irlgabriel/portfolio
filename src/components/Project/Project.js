import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  ProjectContainer,
  InfoColumn,
  TextWrapper,
  ImageWrapper,
  Image,
  TopLine,
  Heading,
  SubtitleItem,
  Features,
  ProjectHeader,
  ProjectLink,
  ProjectIcon,
  SliderButton,

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
}) {
  let i = -1;
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
      <InfoColumn>
        <CarouselProvider
          naturalSlideWidth={500}
          naturalSlideHeight={375}
          totalSlides={slides}
        >
          <Slider>
            {
              images.map(img => 
                <Slide index={i ++}>
                  <ImageWrapper>
                    <Image src={img} />
                  </ImageWrapper>
                </Slide> 
              )
            }
          </Slider >
          <SliderButton>
            <ButtonBack>Back</ButtonBack>
          </SliderButton>
          <SliderButton>
            <ButtonNext>Next</ButtonNext>
          </SliderButton>
        
        </CarouselProvider>
      </InfoColumn>
      
    </ProjectContainer>
  )
}