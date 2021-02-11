import React, { useState, useEffect } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { routes } from "./routes";
import { Switch as MaterialSwitch } from '@material-ui/core/';
import { themeLight, themeDark } from './theme';

import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    minHeight: 'max(100vh, 600px)',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  main: {
    borderRadius: '.75rem',
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    '& > div > div > a > h3': {
      cursor: 'pointer',
      transition: 'all .30s ease-in-out',
      userSelect: 'none',
      '&:hover': {
        transform: 'translateX(20px)',
      }
    },
    '& > div > div > a': {
      color: 'inherit',
      textDecoration: 'none',
      '&:hover': {
        color: theme.palette.info.light
      }
    },
    
  },
  switchContainer: {
    position: 'absolute',
    top: '.5rem',
    right: '.25rem',
    zIndex: '3',
  },
  switchLabel: {
    display: 'flex', 
    alignItems: 'center'
  }
}))

function App() {
  const [theme, setTheme] = useState('dark');

  const classes = useStyles();

  const handleOnChange = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? themeLight : themeDark} >
      <CssBaseline />
      <Router>
        <Grid className={classes.root} spacing={0} container>
          <Box style={{border: `1px solid ${theme === 'dark' ? 'white' : 'black'}`}} className={classes.main} m={2} p={2}>
            <Box
              className={classes.switchContainer}
            >
              <FormControlLabel
                control={
                  <MaterialSwitch 
                  checked={theme == 'dark'}
                  onChange={() => handleOnChange()}
                  />
                }
                label={
                  <Box className={classes.switchLabel}>
                    <NightsStayIcon fontSize='large' />
                    <Typography variant='overline'>Dark mode</Typography>
                  </Box>
                }
              />
            </Box>
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
                        <Component theme={theme} setTheme={setTheme} />     
                      </CSSTransition>
                    )}
                  </Route>
                ))}
              </Switch>
            </TransitionGroup>
          </Box>
        </Grid>
      </Router>
    </ThemeProvider>
  );
}

export default App;
