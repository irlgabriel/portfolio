import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { routes } from "./routes";
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { themeLight, themeDark } from './theme';


function App() {
  const [theme, setTheme] = useState('light');

  const props = [theme, setTheme];

  return (
    <ThemeProvider theme={theme === 'light' ? themeLight : themeDark} >
      <CssBaseline />
      <Router>
        <TransitionGroup>
          <Switch>
            {routes.map(({ path, Component }) => (
              <Route exact path={path} key={path} >
                {({match}) => (
                  <CSSTransition
                    in={match !== null}
                    timeout={300}
                    classNames='page'
                    unmountOnExit
                  >
                    <Component props={props} />     
                  </CSSTransition>
                )}
              </Route>
            ))}
          </Switch>
        </TransitionGroup>
      </Router>
    </ThemeProvider>
  );
}

export default App;
