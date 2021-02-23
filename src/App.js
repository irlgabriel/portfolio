import React, { useState } from "react";
import { Route } from 'react-router-dom';
import { themeLight, themeDark } from './theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import CssBaseline from '@material-ui/core/CssBaseline';

// Pages
import { ProjectPage, IntroPage } from './Pages';

// For page transitions
const routes = [
  { path: '/projects', Component: ProjectPage },
  { path: '/', Component: IntroPage }
]

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeProvider theme={theme === 'light' ? themeLight : themeDark} >
      <CssBaseline />
        {/**Routes */}
        <TransitionGroup component={null}>
        {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={500}
                  classNames="page"
                  mountOnEnter
                  unmountOnExit
                >
                  <div className="page">
                    <Component theme={theme} setTheme={setTheme} />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
          </TransitionGroup>
    </ThemeProvider>
  );
}

export default App;
