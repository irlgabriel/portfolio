import React from "react";
import GlobalStyle from "./globalStyles";
import { HashRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"

// Components
import { Cont as Container } from "./App.components";
import { Navbar, Projects, Footer, Intro, Me } from "./components";
import { CSSTransition } from "react-transition-group";
import { routes } from "./routes";
function App() {

  return (
    <Router basename="/">
      <Container id="everywhere-container" fluid={true} className="px-0">
        <div id="intro-image"></div>
        <div id="some-div-overlay"></div>
        <GlobalStyle />
        <Navbar />
        <Container fluid id="page-wrapper" className="mb-auto p-relative">
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match !== null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div id="inner-wrapper" className="border">
                    <Component />
                  </div>
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
