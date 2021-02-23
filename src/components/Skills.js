import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { technologies }from '../data/Data';
import { CSSTransition } from 'react-transition-group';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useInView } from 'react-intersection-observer';

const useStyles = makeStyles( theme => ({
  root: {
    flexDirection: 'column',
    padding: '1rem'
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
      fontFamily: 'Truculenta',
    },
    '&:hover': {
      transform: 'scale(1.2)',
    }
}))

export default ({theme}) => {
  const classes = useStyles();

  const { ref, inView } = useInView({
    threshold: 0.2
  })

  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if(inView) setEntered(true);
  }, [inView])

  useEffect(() => {
    setEntered(false)
  }, [theme])

  return (
    <CSSTransition
      in={entered}
      timeout={1000}
      classNames='fade'
    >

      <Grid ref={ref} id='skills' className={`${classes.root} fade`} container>
        <Grid item>
          <Typography component='h2' className={classes.title} variant='h3'>Skills</Typography>
        </Grid>
        <Typography variant='h3' component='h3' className={classes.subtitle}>Languages & Frameworks</Typography>
          <Grid className={classes.techContainer} item container>
          {
            technologies.map((tech) => 
              (tech.type === 'language' || tech.type === 'framework') &&
              <Grid key={tech.name} className={classes.iconContainer} item>
                {tech.icon}
              </Grid>
            )
          }
          </Grid>
          <Typography variant='h3' component='h2' className={classes.subtitle}>Tools & Services</Typography>

          <Grid className={classes.techContainer} item container>
          {
            technologies.map(tech => 
              (tech.type !== 'language' && tech.type !== 'framework') &&
              <Grid key={tech.name} className={classes.iconContainer} item>
                {tech.icon}
              </Grid>
            )
          }
          </Grid>
      </Grid>
    </CSSTransition>
  )
}