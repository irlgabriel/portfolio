import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
} from "reactstrap";

export default function AppNavbar() {
  const [isOpen, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!isOpen)
  }
  return (
    <div>
      <Navbar color="dark" dark={true} expand="sm">
        <NavbarBrand href="#">Portfolio</NavbarBrand>
        <NavbarToggler onClick={toggle}>{isOpen ? <FaTimes /> : <FaBars />}</NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavLink href="">Project1</NavLink>
            <NavLink href="">Project1</NavLink>
            <NavLink href="">Project1</NavLink>
            <NavLink href="">Project1</NavLink>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
