import React, { useState, useEffect } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { routes } from "./routes";
import NightsStayIcon from '@material-ui/icons/NightsStay';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Switch as MaterialSwitch } from '@material-ui/core/';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { themeLight, themeDark } from './theme';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    height: 'max(100vh, 600px)',
  },
  main: {
    border: `1px solid ${theme.palette.type === 'dark' ? 'white' : 'black'}`,
    borderRadius: '.75rem',
    inset: '1.5rem',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    '& h3': {
      cursor: 'pointer',
      transition: 'all .30s ease-in-out',
      userSelect: 'none',
      '&:hover': {
        transform: 'translateX(20px)',
      }
    },
    '& a': {
      color: 'inherit',
      textDecoration: 'none',
      '&:hover': {
        color: theme.palette.info.light
      }
    }
  },
  switchContainer: {
    position: 'absolute',
    top: '.5rem',
    right: '.25rem',
    zIndex: '3',
  },
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
          <Box className={classes.main} m={2} p={2}>
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
                label={<NightsStayIcon fontSize='large' />}
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
