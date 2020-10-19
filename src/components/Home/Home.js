import React from "react";
import { Project } from "../../components";
import { Intro, Heading, Sidebar } from "./Home.components";
import { projects } from "./Data";
import { MainProject } from "../../components";
import {
  ListGroup,
  ListGroupItem,
  Container,
} from "reactstrap"

export default function Home() {
  return (
    <Container className="mx-0 px-0 mb-auto" fluid={true}>
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
      <MainProject></MainProject>
    </Container>
  );
}
