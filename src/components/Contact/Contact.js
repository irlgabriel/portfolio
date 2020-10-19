import React from "react";
import { Heading, Container, Paragraph } from "./Contact.components";
import { Zoom } from "react-reveal";

export default function Contact() {
  return (
    <Container className="text-light" style={{position: "relative", flex: "1"}}>
      <div className="bg-img"></div>
        <Zoom>
          <Heading>Get in touch with me!</Heading>
          <Paragraph>I don't know what to put in here yet</Paragraph>
        </Zoom>
    </Container>
  );
}
