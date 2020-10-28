import React from "react";
import GlobalStyle from "./globalStyles";
import { HashRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import { Cont as Container } from "./App.components";
import { Navbar, Projects, Footer, Intro, Me } from "./components";
import { CSSTransition } from "react-transition-group";
import { routes } from "./routes";
function App() {
  return (
    <Router basename="/">
      <Container id="everywhere-container" fluid={true} className="px-0"
      >
        <GlobalStyle />
        <Navbar />
        <Container className="p-relative">
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match !== null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page mb-auto">
                    <Component/>
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </Container>
      </Container>
    </Router>
  );
}

export default App;
