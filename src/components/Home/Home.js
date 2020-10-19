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
      <Sidebar className="w-100 mx-0 px-0" sm="4">
        <ListGroup className="h-100">
          <ListGroupItem color="dark" tag="a" href="" action>Project1
          </ListGroupItem>
          <ListGroupItem color="dark" tag="a" href="" action>Project2
          </ListGroupItem>
          <ListGroupItem color="dark" tag="a" href="" action>Project3
          </ListGroupItem>
        </ListGroup>
      </Sidebar>
      <Col className="mx-0 px-0" sm="8">
        <Zoom>
          <Container>
            <h3 className="text-center">Title</h3>
          </Container>
          <MainProject />
        </Zoom>
      </Col>
    </Row>
  );
}
