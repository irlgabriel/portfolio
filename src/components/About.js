import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { CSSTransition } from 'react-transition-group';
import { useInView } from 'react-intersection-observer';
import cloud from '../images/cloud.svg';


const useStyles = makeStyles(theme => ({
  root: {
    padding: '1rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      flex: '0 1',
    }
  },
  flexItem: {
    [theme.breakpoints.down('sm')]: {
      '&:first-of-type': {
        order: 2,
      },
      '&:last-of-type': {
        order: 1,
      }
    },
    flex: 1,
    display: 'grid',
    placeItems: 'center'
  }, 
  desc: {
    fontFamily: 'Truculenta'
  }
}))


export default () => {
  const classes = useStyles();

  const [entered, setEntered] = useState(false);

  const { ref, inView, entry } = useInView({
    threshold: 0.2
  })

  useEffect(() => {
    if(inView) setEntered(true);
  }, [inView])

  return (
    <CSSTransition
      in={entered}
      classNames='right-slide'
      timeout={1500}
    >
      <Grid id='about-me' ref={ref} className={classes.root} container>
        <Grid className={classes.flexItem} item>
          <Typography className={classes.desc} variant='h4' component='p'>
            I love writing clean code and building simple looking pages with 
            smooth animations.
          </Typography>
        </Grid>
        <Grid className={classes.flexItem} item>
          <img className='cloud' src={cloud} width='50%' />
        </Grid>
      </Grid>
    </CSSTransition>
  )
}