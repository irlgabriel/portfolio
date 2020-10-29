import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Intro, Me, Projects } from "../../components";
import { Navbar, Nav, Container } from "reactstrap";
import { NavLink } from "./Navbar.components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AppNavbar() {
  const [location, setLocation] = useState(useLocation().pathname);
  
  return (
    <Container fluid className="px-0">
      <ToastContainer />
      <Navbar className="w-75 ml-auto">
        <Nav className="w-100 flex-row justify-content-between">
          <NavLink
            onClick={() => setLocation("/")}
            className={location === "/" ? "selected" : ""}
            to="/"
          >
            Intro
          </NavLink>
          <NavLink
            onClick={() => {
              setLocation("/what");
              toast("Scroll to switch projects", { type: toast.TYPE.INFO, position: toast.POSITION.BOTTOM_LEFT});
            }}
            className={location === "/what" ? "selected" : ""}
            to="/what"
          >
            What
          </NavLink>
          <NavLink
            onClick={() => setLocation("/who")}
            className={location === "/who" ? "selected" : ""}
            to="/who"
          >
            Who
          </NavLink>
        </Nav>
      </Navbar>
    </Container>
  );
}
