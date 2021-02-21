import React, { useState } from "react";
import { Switch, Route } from 'react-router-dom';
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
        {/**Routes */}
        <Route path='/projects' exact render={() => <ProjectPage setTheme={setTheme} theme={theme} />} />
        <Route path='/' exact render={() => <IntroPage theme={theme} setTheme={setTheme} />} />
    </ThemeProvider>
  );
}

export default App;
