import React from "react"
import {
  Container,
  Heading,
  InfoColumn,
  Content,
  Para,


} from "./About.components"

export default function About() {
  return (
    <Container>
      <Heading>About me</Heading>
      <InfoColumn>
        <Heading>Bio</Heading>
        <Content>
          <Para>I am a 20 years old guy from Romania. I enjoy
            coding and everything tech related, among other things
            - reading, working out, hiking.
          </Para>
        </Content>
      </InfoColumn>
      <InfoColumn>
        <Heading>Bio</Heading>
        <Content>
          <Para>I am a 20 years old guy from Romania. I enjoy
            coding and everything tech related, among other things
            - reading, working out, hiking.
          </Para>
        </Content>
      </InfoColumn>
      <InfoColumn>
        <Heading>Bio</Heading>
        <Content>
          <Para>I am a 20 years old guy from Romania. I enjoy
            coding and everything tech related, among other things
            - reading, working out, hiking.
          </Para>
        </Content>
      </InfoColumn>
      <InfoColumn>
        <Heading>Bio</Heading>
        <Content>
          <Para>I am a 20 years old guy from Romania. I enjoy
            coding and everything tech related, among other things
            - reading, working out, hiking.
          </Para>
        </Content>
      </InfoColumn>
    </Container>
  )
}