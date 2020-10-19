import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
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
            <NavItem tag="a" action href="#" >
              <NavLink>Project1</NavLink>
            </NavItem>
            <NavItem tag="a" action href="#" >
              <NavLink>Project1</NavLink>
            </NavItem>
            <NavItem tag="a" action href="#" >
              <NavLink>Project1</NavLink>
            </NavItem>
            <NavItem tag="a" action href="#" >
              <NavLink>Project1</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
