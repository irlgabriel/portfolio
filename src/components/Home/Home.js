import React, { useState } from "react";
import ScrollSpy from "react-scrollspy"
import { mainProjects } from "../Home/Data"
// import { Project } from "../../components";
import { Sidebar } from "./Home.components";
// import { projects } from "./Data";
import { ListItem, ListItemText} from '@material-ui/core/'

import { MainProject } from "../../components";
import {
  Row,
  Col,
  Container
} from "reactstrap"

export default function Home() {

  return (
    <Row id="main" className="bg-dark text-light mx-0 px-0 mb-4" noGutters={true}>
      {/*<div className="bg-img"></div>*/}
      <Sidebar className="sticky-top mx-0 px-0" sm="3">
      <ScrollSpy items={['who-am-i', 'facebook-clone', 'weather-app', 'mern-app', 'book-library', 'cv-generator', 'netflix-memory-game']} currentClassName="selected">
        <ListItem component="a" href="#who-am-i" className="selected">
          <ListItemText className="text-light text-decoration-none">Who am I</ListItemText>
        </ListItem>
        <ListItem component="a" href="#facebook-clone">
          <ListItemText className="text-light text-decoration-none">Facebook Clone</ListItemText>
        </ListItem>
        <ListItem component="a" href="#weather-app">
          <ListItemText className="text-light text-decoration-none">Weather App</ListItemText>
        </ListItem>
        <ListItem component="a" href="#mern-app">
          <ListItemText className="text-light text-decoration-none">Mern Shopping List</ListItemText>
        </ListItem>
        <ListItem component="a" href="#book-library">
          <ListItemText className="text-light text-decoration-none">Book Library</ListItemText>
        </ListItem>
        <ListItem component="a" href="#cv-generator">
          <ListItemText className="text-light text-decoration-none">CV Generator</ListItemText>
        </ListItem>
        <ListItem component="a" href="#netflix-memory-game">
          <ListItemText className="text-light text-decoration-none">Netflix Memory Game</ListItemText>
        </ListItem>
      </ScrollSpy>
      </Sidebar>
      <Col className="mx-0 px-0" xs="12" sm="9">
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
