import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { routes } from "./routes";

function App() {
  return (
    <Router>
      <TransitionGroup>
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
                  <Component />     
                </CSSTransition>
              )}
            </Route>
          ))}
        </Switch>
      </TransitionGroup>
    </Router>
  );
}

export default App;
