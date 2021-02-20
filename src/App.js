import React, { useState } from "react";
import { HashRouter as Router, Route } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";
import { themeLight, themeDark } from './theme';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';

// Pages
import { ProjectPage, IntroPage } from './Pages';


function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeProvider theme={theme === 'light' ? themeLight : themeDark} >
      <CssBaseline />
      <Router basename='/portfolio'>
        {/**Routes */}
        <Route path='/' exact render={() => <IntroPage theme={theme} setTheme={setTheme} />} />
        <Route path='/projects' exact render={() => <ProjectPage setTheme={setTheme} theme={theme} />} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
