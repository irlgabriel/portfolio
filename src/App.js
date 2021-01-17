import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { routes } from "./routes";
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { themeLight, themeDark } from './theme';
import { Background } from './components';

const useStyles = makeStyles({
  root: {
    transition: 'all .35s ease-in-out',
  }
})



function App() {
  const [theme, setTheme] = useState('dark');
  const classes = useStyles();
  const props = [theme, setTheme];

  

  return (
    <ThemeProvider theme={theme === 'light' ? themeLight : themeDark} >
      <CssBaseline />
      <Background theme={theme} />
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
                    <Component className={classes.root} props={props} />     
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
