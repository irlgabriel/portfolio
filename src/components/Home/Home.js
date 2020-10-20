import React, { useState } from "react";
import ScrollSpy from "react-scrollspy"
import { mainProjects } from "../Home/Data"
// import { Project } from "../../components";
import { Sidebar, Image } from "./Home.components";
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
      <Sidebar className="d-none d-md-block sticky-top mx-0 px-0" sm="3">
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
      <Col className="mx-0 px-0">
        <Container className="mt-4 px-0" fluid={true}>
          <Container fluid id="who-am-i" className="clearfix mx-0">
            <h2>Who am I</h2>
            <Image className="float-left mr-3" src={require('../../images/me.jpeg')} />
            <p>
              I am 21 years old, living in Romania and I absolutely
              love learning web development and take great pleasure
              in getting better at it everyday. Other things that I enjoy
              are reading, working out, sightseeing and driving. 
            </p>
          </Container>
        </Container>  
        <Container>
          <h1 className="border-top border-light pt-3 my-4" >Projects</h1>
          {
            mainProjects.map(project =>
            <MainProject {...project}/>)
          }
        </Container>
      </Col>
    </Row>
  );
}
