import React from "react";
import { mainProjects } from "./Data"
import { 
  Sidebar,
  MainProject,
} from "..";
import {
  Row,
  Col,
  Container
} from "reactstrap"

export default () => {
  return (
    <Row id="main" className="bg-dark text-light mx-0 px-0" noGutters={true}>
      <Sidebar color="#292b2c"/>
      <Col className="mx-0 px-0">
        <Container>
          <h1>Projects</h1>
          {
            mainProjects.map(project =>
            <MainProject {...project}/>)
          }
        </Container>
      </Col>
    </Row>
  );
}
