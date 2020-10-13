import React from "react";
import { Fade } from "react-reveal";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

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
  Image,
  ImageWrapper,
  CarouselComponent,
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
    <Fade>
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
            <CarouselComponent showThumbs={false} showArrows={true} className="carousel" bgColor={bgColor}>
              {images.map(obj => <ImageWrapper><Image src={obj.src} /><p className="legend">Image {obj.idx + 1}</p></ImageWrapper>)}
            </CarouselComponent>
        </InfoColumn>
      </ProjectContainer>
    </Fade>
  )
}