import React from "react";
import { Row, Col } from "reactstrap";

export default () => {
  return (
    <Row noGutters className="border me text-light">
      <Col xs="12" sm="6" noGutters className="d-flex justify-content-center">
        <img style={{width: "350px"}} src={require("../../images/me.jpeg")} />
      </Col>
      <Col xs="12" sm="6">
        
      </Col>
    </Row>
  );
};
