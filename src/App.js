import React, { useState } from "react";
import GlobalStyle from "./globalStyles";
import { HashRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"
import { mainProjects } from "./components/Projects/./Data";

// Components
import { Container } from "reactstrap";
import { Navbar, Projects, Footer, Intro, Me } from "./components";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { routes } from "./routes";
function App() {
  const [currentSlide, setSlide] = useState(0);
  const [sidebar, setSidebar] = useState(false);
  return (
    <Router basename="/">
      <GlobalStyle />
      <Container id="topmost-container" fluid={true}>
      <div className="projects-sidebar">
        {
          mainProjects.map((project, index) => 
            <div onMouseEnter={() => {setSlide(index); setSidebar(true)}} className={`project-sidebar-item ${index === currentSlide ? "active-sidebar" : ""}`} id={project.id}></div>  
          )
        }
      </div>
        <div id="intro-image"></div>
        <div className="page-overlay"></div>
        <Navbar />
        <TransitionGroup className="container-fluid"id="page-wrapper">
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  key={path}
                  in={match !== null}
                  timeout={500}
                  classNames="fade"
                  unmountOnExit
                >
                  <Component slide={currentSlide} setSlide={setSlide} sidebar={sidebar}/>
                </CSSTransition>
              )}
            </Route>
          ))}
        </TransitionGroup>
      <Footer/>
      </Container>
    </Router>
  );
}

export default App;
