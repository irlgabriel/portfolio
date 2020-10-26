import React from "react";
import { mainProjects } from "../Home/Data"
import { Image } from "./Home.components";
import { 
  Sidebar,
  MainProject,
} from "../../components";
import {
  Row,
  Col,
  Container
} from "reactstrap"

export default function Home() {

  return (
    <Row id="main" className="bg-dark text-light mx-0 px-0 mb-4" noGutters={true}>
      <Sidebar color="#292b2c"/>
      <Col className="mx-0 px-0">
        
        <Container>
          <h1 style={{borderTop: "1px solid darkslategray"}} className="pt-3 my-4" >Projects</h1>
          {
            mainProjects.map(project =>
            <MainProject {...project}/>)
          }
        </Container>
      </Col>
    </Row>
  );
}
