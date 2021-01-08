import React, { useState } from "react";
import GlobalStyle from "./globalStyles";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"

// Components
import { Container } from "reactstrap";
import { Navbar, Footer } from "./components";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { routes } from "./routes";
function App() {
  const [currentSlide, setSlide] = useState(0);
  const [sidebar, setSidebar] = useState(false);
  return (
    <Router>
      <GlobalStyle />
      <Container id="topmost-container" fluid={true}>
      <div id="intro-image"></div>
      <div className="page-overlay"></div>
      <Navbar />
      <TransitionGroup id="page-wrapper">
        <Switch>
          {routes.map(({ path, Component }) => (
            <Route exact path={path} key={path}>
              {({match}) => (
                <CSSTransition
                  in={match !== null}
                  timeout={300}
                  classNames='page'
                  unmountOnExit
                >
                  <Component slide={currentSlide} setSlide={setSlide} sidebar={sidebar} setSidebar={setSidebar}/>     
                </CSSTransition>
              )}
            </Route>
          ))}
        </Switch>
      </TransitionGroup>
      <Footer/>
      </Container>
    </Router>
  );
}

export default App;
