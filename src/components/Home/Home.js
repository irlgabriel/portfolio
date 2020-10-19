import React from "react";
// import { Project } from "../../components";
import { Intro, Sidebar } from "./Home.components";
// import { projects } from "./Data";
import { Zoom } from "react-reveal"

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
      <Sidebar className="h-100 w-100 mx-0 px-0" sm="3">
        <ListGroup className="h-100">
          <ListGroupItem color="dark" tag="a" href="" action active>Project1
          </ListGroupItem>
          <ListGroupItem color="dark" tag="a" href="" action>Project2
          </ListGroupItem>
          <ListGroupItem color="dark" tag="a" href="" action>Project3
          </ListGroupItem>
        </ListGroup>
      </Sidebar>
      <Col className="mx-0 px-0" sm="9">
        <Zoom>
          <Container fluid={true}>
            <h3 className="text-center">Who I am</h3>
            <p>
              &nbsp;&nbsp;&nbsp;I am 20 years old, living in Romania and I absolutely
              love learning web development and take great pleasure
              in getting better at it everyday. 
            </p>
          </Container>
          <MainProject />
        </Zoom>
      </Col>
    </Row>
  );
}
