import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { projects } from '../data/Data';
import { useInView } from 'react-intersection-observer';

import { Project } from '../Components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '1rem',
    '& .MuiTypography-overline': {
      fontSize: '2rem',
      lineHeight: '1.5'
    },
    '& .MuiTypography-h3': {
      margin: '1rem 0'
    }
  },
  title: {
    '& h3': {
      fontFamily: 'Truculenta',
    },
    display: 'flex',
    justifyContent: 'center',
    width: '50%',
    margin: '0 auto'
  },
}))


export default () => {
  const classes = useStyles();

  return (
    <Grid id="projects" className={classes.root} container>
      <Box className={classes.title}>
        <Typography variant='h3'>Projects</Typography>
        <Divider />
      </Box>
      <TransitionGroup component={null}>
      {
        projects.map(project =>
          <Project {...project}/>
        )
      }
      </TransitionGroup>
    </Grid>
  )
}