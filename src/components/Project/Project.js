import React, {useState} from "react";
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
  Features,
  ProjectHeader,
  ProjectLink,
  ProjectIcon,

} from "./Project.components";
export default function Project({
  bgColor,
  textColor,
  img,
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
}) {
  const [currentImage, setImage] = (img);
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
          <Subtitle>
          {
            subtitleContent.map(item => <SubtitleItem>{item}</SubtitleItem>)
          }
          </Subtitle>
        </TextWrapper>
      </InfoColumn>
      <InfoColumn>
        <ImageWrapper imageLeft={imageLeft} bgColor={bgColor}>
          <Image src={img} alt={alt} />
        </ImageWrapper>
      </InfoColumn>
      
    </ProjectContainer>
  )
}