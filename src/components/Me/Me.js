import React from "react";
import { Container } from "reactstrap";
import { BackgroundImage } from "./Me.components";
import { GoLocation } from "react-icons/go";
export default () => {
  return (
    <Container style={{color: "White"}} fluid id="me">
      <BackgroundImage />
      <div className="page-overlay"></div>

      <h2 style={{marginTop: ".5rem", lineHeight: "1"}}>Gabriel, 21</h2>
      <div className="d-flex align-items-center">
        <GoLocation/>
        <h5 style={{marginBottom: "0"}}>Brasov, Romania</h5>
      </div>
      <p style={{marginLeft: "1rem", marginTop: ".5rem"}}>I am a young aspiring front end web developer from Romania. I have worked with ruby on rails in the past and spent considerable amount of time developing a facebook clone with it. Lately I got into React and and I have developed a couple of apps with it. Right now I am working on a reddit clone with the popular MERN stack. When I am not learning and practicing web development I am probably working out or reading. </p>

    </Container>
  );
};
