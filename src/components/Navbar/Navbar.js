import React from "react";
import {
  Navbar,
  Nav,
  Container
} from "reactstrap";
import { NavLink } from "./Navbar.components"

export default function AppNavbar() {

  return (
    <Container className="px-0">
      <Navbar className="w-50 ml-auto">
        <Nav className="w-100 flex-row justify-content-between">
          <NavLink to="/">Intro</NavLink>
          <NavLink to="/what">What</NavLink>
          <NavLink to="/who">Who</NavLink>
        </Nav>
      </Navbar>
    </Container>
  );
}
