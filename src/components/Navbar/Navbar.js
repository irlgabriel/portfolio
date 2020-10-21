import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  Container
} from "reactstrap";

export default function AppNavbar() {
  const [isOpen, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!isOpen)
  }
  return (
    <Container style={{borderBottom: "1px solid darkslategray"}} fluid={true} className="px-0">
      <Navbar color="dark" dark={true} expand="sm">
        <NavbarBrand href="/">Portfolio</NavbarBrand>
        <NavbarToggler onClick={toggle}>{isOpen ? <FaTimes /> : <FaBars />}</NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavLink tag="a" href="/portfolio" active>Home</NavLink>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
}
