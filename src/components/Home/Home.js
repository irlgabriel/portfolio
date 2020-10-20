import React from "react";
import ScrollSpy from "react-scrollspy"
import { mainProjects } from "../Home/Data"
// import { Project } from "../../components";
import { Sidebar } from "./Home.components";
// import { projects } from "./Data";

import { MainProject } from "../../components";
import {
  ListGroupItem,
  Row,
  Col,
  Container
} from "reactstrap"

export default function Home() {
  return (
    <Row id="main" className="bg-dark text-light mx-0 px-0 mb-auto" noGutters={true}>
      {/*<div className="bg-img"></div>*/}
      <Sidebar className="hidden-md-down sticky-top mx-0 px-0" sm="3">
        <ScrollSpy items={['who-am-i', 'facebook-clone', 'weather-app', 'mern-app']} currentClassName="active">
          <ListGroupItem tag="a" href="#who-am-i" action>Who am I</ListGroupItem>
          <ListGroupItem tag="a" href="#facebook-clone" action>Facebook Clone</ListGroupItem>
          <ListGroupItem tag="a" href="#weather-app" action>Weather App</ListGroupItem>
          <ListGroupItem tag="a" href="#mern-app" action>Mern Shopping List</ListGroupItem>
        </ScrollSpy>
      </Sidebar>
      <Col className="mx-0 px-0" sm="9">
        <Container data-spy="scroll" data-target="#sidebar-nav" className="mt-4 x-0" fluid={true}>
          <Container id="who-am-i" className="px-0" fluid={true}>
            <h3 className="text-center">Who am I</h3>
            <p>
              I am 20 years old, living in Romania and I absolutely
              love learning web development and take great pleasure
              in getting better at it everyday. 
            </p>
          </Container>
        </Container>
        <Container>
          <h1 className="text-center" >Projects</h1>
          {
            mainProjects.map(project =>
            <MainProject {...project}/>)
          }
        </Container>
      </Col>
    </Row>
  );
}
