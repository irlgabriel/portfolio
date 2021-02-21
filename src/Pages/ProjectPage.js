import React, { useEffect } from 'react';
import { TransitionGroup } from 'react-transition-group';
import { projects } from '../data/Data' ;
import { Project, Header, Contact } from '../Components';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    flexDirection: 'column'
  }
})

export default ({setTheme, theme}) => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  return (
    <Grid className={classes.root} container>
      <Grid item>
        <Header theme={theme} setTheme={setTheme} />
      </Grid>
      <Grid item>
        <TransitionGroup component={null}> 
        {
          projects.map(project => 
            <Project key={project.idx} theme={theme} {...project} />
          )
        }
        </TransitionGroup>
      </Grid>
      <Grid item>
        <Contact />
      </Grid>
    </Grid>
  )
}