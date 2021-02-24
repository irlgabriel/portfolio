import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { CSSTransition } from 'react-transition-group';
import { useInView } from 'react-intersection-observer';
import { AiTwotoneBuild } from 'react-icons/ai';


const useStyles = makeStyles(theme => ({
  root: {
    padding: '1rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      flex: '0 1',
    },
    width: '80%',
    margin: '0 auto',
  },
  desc: {
    fontFamily: 'Truculenta'
  },
  tetris: {
    color: theme.palette.secondary.main
  },
  row: {
    textAlign: 'center'
  }
}))


export default ({theme}) => {
  const classes = useStyles();

  const [entered, setEntered] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.2
  })

  useEffect(() => {
    if(inView) setEntered(true);
  }, [inView])

  useEffect(() => {
    setEntered(false);
  }, [theme])

  return (
    <CSSTransition
      in={entered}
      classNames='bubble'
      timeout={1000}
    >
      <Grid id='about-me' ref={ref} className={`${classes.root} bubble`} container>
        <Grid className={classes.row} item>
          <AiTwotoneBuild className={classes.tetris} size='144px'/>
        </Grid>
        <Grid className={classes.row} item>
          <Typography className={classes.desc} variant='h4' component='p'>
            I love building all kind of things. Here's some of the projects that I am proudest of.
          </Typography>
        </Grid>
      </Grid>
    </CSSTransition>
  )
}