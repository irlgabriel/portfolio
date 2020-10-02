import React from "react";
import {
  ProjectContainer,
  InfoColumn,
  TextWrapper,
  ImageWrapper,
  Image,
  TopLine,
  Heading,
  Subtitle,
  SubtitleItem,
} from "./Project.components";
export default function Project({
  bgColor,
  textColor,
  img,
  alt,
  projectTitle,
  headingContent,
  subtitleContent,
  imageLeft

}) {
  return (
    <ProjectContainer imageLeft={imageLeft} bgColor={bgColor} textColor={textColor}>
      <InfoColumn>
        <TextWrapper>
          <TopLine>{projectTitle}</TopLine>
          <Heading>{headingContent}</Heading>
          <Subtitle>
          {
            subtitleContent.map(item => <SubtitleItem>{item}</SubtitleItem>)
          }
          </Subtitle>
        </TextWrapper>
      </InfoColumn>
      <InfoColumn>
        <ImageWrapper>
          <Image src={img} alt={alt} />
        </ImageWrapper>
      </InfoColumn>
      
    </ProjectContainer>
  )
}