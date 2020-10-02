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
  Features,
  ProjectHeader,
  ProjectLink,

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
}) {
  return (
    <ProjectContainer imageLeft={imageLeft} bgColor={bgColor} textColor={textColor}>
      <InfoColumn>
        <TextWrapper>
          <ProjectHeader>
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
        <ImageWrapper bgColor={bgColor}>
          <Image src={img} alt={alt} />
        </ImageWrapper>
      </InfoColumn>
      
    </ProjectContainer>
  )
}