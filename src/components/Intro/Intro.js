import React from "react";
import { Container } from "reactstrap";

export default () => {
  return <Container className="d-flex justify-content-center" fluid>
    <div style={{width: "500px", height: "500px", backgroundColor: "red"}}></div>
  </Container>;
};
