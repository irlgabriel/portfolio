import React from "react";
import { Row, Col } from "reactstrap";

export default () => {
  return (
    <Row className="mb-auto">
      <Col
        className="border d-flex justify-content-center align-items-center"
        id="img-me"
        md="6"
        sm="12"
      >
        <h2>A NICE PICTURE OF ME</h2>
      </Col>
      <Col
        className="border d-flex justify-content-center align-items-center"
        md="6"
        sm="12"
      >
        <h2>SOME NICE INFO ABOUT ME</h2>
      </Col>
    </Row>
  );
};
