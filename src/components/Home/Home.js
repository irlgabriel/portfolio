import React from "react";

// import { Project } from "../../components";
import { Intro, Sidebar } from "./Home.components";
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
      <Sidebar className="mx-0 px-0" sm="4">
        <ListGroup>
          <ListGroupItem tag="a" href="" action>Project1
          </ListGroupItem>
          <ListGroupItem tag="a" href="" action>Project2
          </ListGroupItem>
          <ListGroupItem tag="a" href="" action>Project3
          </ListGroupItem>
        </ListGroup>
      </Sidebar>
      <Col className="mx-0 px-0" sm="8">
        <Container>
          <h3 className="text-center">Title</h3>
        </Container>
        <MainProject />
      </Col>
    </Row>
  );
}
