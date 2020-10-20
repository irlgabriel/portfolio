import React from "react";
import ScrollSpy from "react-scrollspy"
// import { Project } from "../../components";
import { Sidebar } from "./Home.components";
// import { projects } from "./Data";

import { MainProject } from "../../components";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Container
} from "reactstrap"

export default function Home() {
  return (
    <Row id="main" className="text-light mx-0 px-0 mb-auto" noGutters={true}>
      <div className="bg-img"></div>
      <Sidebar id="sidebar-nav" className="sticky-top mx-0 px-0" sm="3">
        <ScrollSpy items={['who-am-i', 'projects']} currentClassName="active" style={{borderRadius: "0px", opacity: "0.5"}}>
          <ListGroupItem color="dark" tag="a" href="#who-am-i" action>Who am I
          </ListGroupItem>
          <ListGroupItem color="dark" tag="a" href="##projects" action>Facebook Clone
          </ListGroupItem>

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
        <Container id="projects">
          <h1>Projects</h1>
          <MainProject />
        </Container>
      </Col>
    </Row>
  );
}
