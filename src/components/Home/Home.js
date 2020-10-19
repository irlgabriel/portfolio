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
    <Container className="m-0 p-0 mb-auto" fluid={true}>{
      /*
      <Intro>
        <Heading>Projects Overview</Heading>
      </Intro>
      {projects.map((project) => (
        <Project {...project} key={project.key} />
      ))}
      */
      }
      <Sidebar className="m-0 p-0" sm="4">
        <ListGroup>
          <ListGroupItem tag="a" href="" action>Project 1
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
