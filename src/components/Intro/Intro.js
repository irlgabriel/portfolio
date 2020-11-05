import React from "react";
import { Container, Row, Col } from "reactstrap";
import { SmallProject } from "../SmallProject/SmallProject";
import { Link } from "react-router-dom";
import { mainProjects } from "../Projects/Data"
import { GoLocation } from "react-icons/go"

export default () => {
  return (
    <Container style={{padding:"0"}} fluid>
      <Row noGutters id="intro-cards-row">
        <Col xs={12} md={6} id="who-card" className="intro-card">
          <div className="page-overlay"></div>

          <h1>About me</h1>
          <h2 style={{lineHeight: "1"}}>Gabriel, 21</h2>
          <div className="d-flex align-items-center">
            <GoLocation/>
            <h5 style={{marginBottom: "0"}}>Brasov, Romania</h5>
          </div>

          <div id="who-image"></div>
          <Link to="/who" className="see-more">SEE MORE</Link>          
        </Col>
        <Col xs={12} md={6} id="what-card" className="intro-card">
          {/* Absolutely positioned */}
          <div className="page-overlay"></div>
          <div id="what-image"></div>

          <h1>My work</h1>
          
          {
            mainProjects.map(project => 
              <SmallProject codeURL={project.codeURL} liveURL={project.liveURL} key={project.key} img={project.images.src} name={project.name}/>
            )
          }

          {/* Absolutely positioned */}
          <Link to="/what" className="see-more">SEE MORE</Link>
        </Col>
      </Row>
    </Container>
  )
};
