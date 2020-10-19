import React from "react";
import { Zoom } from "react-reveal";

import {
  ContainerFlex,
  Heading,
  InfoColumn,
  Content,
  Para,
  ImageContainer,
} from "./About.components";

import {
  Row,
  Col,
  Container,
} from "reactstrap"
export default function About() {
  return (
    <Container style={{position: 'relative', flex: "1" }} fluid={true}>
      <div className="bg-img"></div>
      <Zoom>
        <Container className="text-light m-3 p-2">
          <h3>About Me</h3>
          <Row>
            <ImageContainer
                src={require("../../images/me.jpeg")}
            ></ImageContainer>
            <Col style={{flex: "1"}} >
              <p>
                I am a 20 years old guy from Romania. I enjoy coding and
                everything tech related. Other things I enjoy are reading,
                working out and sightseeing.
              </p>
            </Col>
          </Row>
        </Container>
      </Zoom>
    </Container>
  );
}
