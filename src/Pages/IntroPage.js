import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Header, Intro, Projects, Skills, Contact, About } from '../Components';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexDirection: 'column',
    transition: 'color .25s ease-in-out, background .25s ease-in-out'
  },
}))

export default ({theme, setTheme}) => {

  const classes = useStyles();

  return (
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
        <Skills />
      </Grid>
      <Grid item>
        <Contact />
      </Grid>
    </Grid>
  )
}