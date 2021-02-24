import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { technologies }from '../data/Data';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useInView } from 'react-intersection-observer';

import { Tools } from '../Components';
const useStyles = makeStyles( theme => ({
  root: {
    
  },
  rows: {
    flexDirection: 'column',
    
  },
  title: {
    textAlign: 'center',  
    fontFamily: 'Truculenta',
  },
  techContainer: {
    flexWrap: 'wrap',
    padding: '1rem',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-around'
    }
  },
  iconContainer: {
    position: 'relative',
    borderRadius: '12px',
    display: 'grid',
    padding: '1rem',
    placeItems: 'center',
    zIndex: '2',
    transition: 'transform .35s ease-in-out',
    cursor: 'pointer',
  },
  subtitle: {
    padding: '1rem',
    fontFamily: 'Truculenta',
  },
  '&:hover': {
    transform: 'scale(1.2)',
  },
  section: {
    background: theme.palette.primary.main
  }
}))

export default ({theme}) => {
  const classes = useStyles();

  const { ref, inView } = useInView({
    threshold: 0.2
  })

  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if(inView === true) setEntered(true);
  }, [inView])

  useEffect(() => {
    setEntered(false)
  }, [theme])

  return (

      <Grid  id='skills' className={`${classes.root}`} container>
        <TransitionGroup component={null}>
          <Grid className={`${classes.rows}`} container>
            <Grid item>
              <Typography component='h2' className={classes.title} variant='h3'>Skills</Typography>
            </Grid>

            <Typography variant='h3' component='h3' className={classes.subtitle}>Languages & Frameworks</Typography>
              <Grid ref={ref} className={classes.techContainer} item container>
              {
                technologies.map((tech) => 
                  (tech.type === 'language' || tech.type === 'framework') &&
                  <CSSTransition
                    appear
                    in={entered}
                    timeout={1000}
                    classNames='slide-up'
                  >
                    <Grid key={tech.name} className={`${classes.iconContainer} slide-up`} item>
                      {tech.icon}
                    </Grid>
                  </CSSTransition>
                )
              }
              </Grid>
          </Grid>
        </TransitionGroup>
      <Tools theme={theme}/>
    </Grid>
  )
}