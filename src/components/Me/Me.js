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
      <p style={{marginLeft: "1rem", marginTop: ".5rem"}}>I am a young aspiring front end web developer from Romania.</p>

    </Container>
  );
};
