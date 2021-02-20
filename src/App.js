import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { themeLight, themeDark } from './theme';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// Pages
import { ProjectPage, IntroPage } from './Pages';


function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeProvider theme={theme === 'light' ? themeLight : themeDark} >
      <CssBaseline />
      <Router>
        {/**Routes */}
        <Switch>
          <Route exact path='/projects' render={() => <ProjectPage setTheme={setTheme} theme={theme} />} />
          <Route path='/' render={() => <IntroPage theme={theme} setTheme={setTheme} />} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
