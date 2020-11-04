import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

export default () => {
  return (
    <Container style={{padding:"0"}} fluid>
      <Row noGutters id="intro-cards-row">
        <Col xs={12} md={6} id="who-card" className="intro-card">
          <div className="page-overlay"></div>
          <div id="who-image"></div>
          <Link to="/who" className="see-more">SEE MORE</Link>          
        </Col>
        <Col xs={12} md={6} id="what-card" className="intro-card">
          <div className="page-overlay"></div>
          <div id="what-image"></div>
          <Link to="/what" className="see-more">SEE MORE</Link>
        </Col>
      </Row>
    </Container>
  )
};
