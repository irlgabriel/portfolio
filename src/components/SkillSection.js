import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { CSSTransition } from 'react-transition-group';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
  root: {
    width: '80%',
    margin: '0 auto',
    flexDirection: 'column',
    padding: '1rem',
    justifyContent: 'center'
  }
}))
 
export default ({theme, title, align, icons}) => {
  const classes = useStyles();

  const { inView, ref } = useInView({
    threshold: 0.2
  });

  const [entered, setEntered] = useState(false)

  useEffect(() => {
    if(inView) setEntered(true);
  }, [inView])

  useEffect(() => {
    setEntered(false)
  }, [theme])

  return (
    <CSSTransition
      in={entered}
      classNames='bubble'
      timeout={1000}
    >
      <Grid ref={ref} container item style={{alignItems: align}} className={`${classes.root} bubble`}>
        <Typography variant='h4'>{title}</Typography>
        {
          icons.map(icon => 
            icon
          )
        }
      </Grid>
    </CSSTransition>
  )
}