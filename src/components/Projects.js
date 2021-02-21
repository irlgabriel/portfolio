import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { makeStyles } from '@material-ui/core/styles';
import { TransitionGroup } from 'react-transition-group';
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
  link: {
    textDecoration: 'none',
    margin: '0 auto'
  }
}))


export default ({theme}) => {
  const classes = useStyles();

  const { ref, isInView } = useInView({
    threshold: 0.2
  })

  const [entered, setEntered] = useState(false) ;

  useEffect(() => {
    if(isInView) setEntered(true);
  }, [isInView])

  

  return (
    <Grid id="projects" className={classes.root} container>
      <Box className={classes.title}>
        <Typography variant='h3'>Featured Projects</Typography>
        <Divider />
      </Box>
      {
        projects.map((project, idx) =>
          project.featured && 
          <Project key={project.key} id={idx} theme={theme} {...project}/>
        )
      }
        <Link className={`${classes.link}`}  to='/projects'>
          <Button variant='contained' color='secondary' size='large'>See all projects</Button>
        </Link>
    </Grid>
  )
}