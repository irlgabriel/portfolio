import React from "react";
import GlobalStyle from "./globalStyles";
import { HashRouter as Router, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import { Cont as Container } from "./App.components";
import { Navbar, Projects, Footer, Intro, Me } from "./components";
import { CSSTransition } from "react-transition-group";
import { routes } from "./routes";
function App() {
  const handleScroll = () => {
    
  }
  return (
    <Router basename="/">
      <Container id="everywhere-container" fluid={true} className="px-0"
      >
        <GlobalStyle />
        <Navbar />
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
                  <Component
                    onScroll={handleScroll}
                  />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
