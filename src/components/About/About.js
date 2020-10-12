import React from "react"
import {
  Container,
  ContainerFlex,
  Heading,
  InfoColumn,
  Content,
  Para,
  Image,
  ImageContainer,

} from "./About.components"

export default function About() {
  return (
    <Container>
      <Heading>About me</Heading>
      <ContainerFlex>
        <ImageContainer>
          <Image href={require("../../images/me.jpeg")} />
        </ImageContainer>
        <InfoColumn>
          <Content>
            <Para>I am a 20 years old guy from Romania. I enjoy
              coding and everything tech related. Other things I enjoy are
              reading, working out and sightseeing.
            </Para>
          </Content>
        </InfoColumn>
      </ContainerFlex>
    </Container>
  )
}