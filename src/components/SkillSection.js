import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { CSSTransition } from 'react-transition-group';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = props => makeStyles((theme) => ({
  root: {
    width: '80%',
    margin: '0 auto',
    flexDirection: 'column',
    padding: '1rem',
    justifyContent: 'center',
    alignItems: props.align,
    '& h4': {
      fontFamily: 'Truculenta'
    },
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center'
    }
  },
  imageContainer: {
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center',
    width: '30%',
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  }
}))
 
export default ({theme, title, align, icons}) => {
  const props = { theme, title, align, icons};

  const classes = useStyles(props)();

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
    <Grid ref={ref} container item className={`${classes.root}`}>
      <Grid className={classes.imageContainer} container item>
        <Typography component='h4' variant='h2'>{title}</Typography>
        {
          icons.map(icon => 
            icon
          )
        }
      </Grid>
    </Grid>
  )
}