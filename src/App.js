import React from "react";
import GlobalStyle from "./globalStyles";
import { HashRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"

// Components
import { Container } from "reactstrap";
import { Navbar, Projects, Footer, Intro, Me } from "./components";
import { CSSTransition } from "react-transition-group";
import { routes } from "./routes";
function App() {

  return (
    <Router basename="/">
      <Container id="topmost-container" fluid={true}>
        <div id="intro-image"></div>
        <div className="page-overlay"></div>
        <GlobalStyle />
        <Navbar />
        <Container fluid id="page-wrapper">
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match !== null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <Component />
                </CSSTransition>
              )}
            </Route>
          ))}
        </Container>
      <Footer/>
      </Container>
    </Router>
  );
}

export default App;
