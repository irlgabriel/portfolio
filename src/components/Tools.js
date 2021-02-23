import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { technologies } from '../data/Data';
import { useInView } from 'react-intersection-observer';
import { CSSTransition } from 'react-transition-group';

const useStyles = makeStyles(theme => ({
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
    width: '100%',
    background: theme.palette.primary.main
  }
}))

export default ({theme}) => {
  const classes = useStyles()

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
  <Box className={classes.section}>
    <CSSTransition
      in={entered}
      timeout={1000}
      classNames='slide-up'
    >
      <Box ref={ref} className='slide-up'>
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
      </Box>
    </CSSTransition>
  </Box>
  )
}