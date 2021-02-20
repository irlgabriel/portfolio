import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { themeLight, themeDark } from './theme';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';

// Page Components
import { Header, Intro, Projects, Tools, Contact, About } from './Components';

const useStyles = makeStyles(theme => ({
  root: {
    flexDirection: 'column',
    transition: 'color .25s ease-in-out, background .25s ease-in-out'
  },
}))

function App() {
  const [theme, setTheme] = useState('dark');

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme === 'light' ? themeLight : themeDark} >
      <CssBaseline />
        <Grid className={classes.root} spacing={0} container>
          <Grid item>
            <Header theme={theme} setTheme={setTheme}/>
          </Grid>
          <Grid item>
            <Intro />
          </Grid>
          <Grid item>
            <About />
          </Grid>
          <Grid item>
            <Projects theme={theme} />
          </Grid>
          <Grid item>
            <Tools />
          </Grid>
          <Grid item>
            <Contact />
          </Grid>
          
        </Grid>
    </ThemeProvider>
  );
}

export default App;
