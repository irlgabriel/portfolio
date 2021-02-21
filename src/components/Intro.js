import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { CSSTransition } from 'react-transition-group';
import me from '../images/me.jpeg';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'stretch',
    },
    padding: '1rem',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-around',
    '& .MuiTypography-subtitle1': {
      fontSize: '1.5rem',
      color: theme.palette.text.secondary,
      [theme.breakpoints.down('sm')]: {
        margin: '.5rem 0'
      }
    },
    '& .MuiButtonBase-root': {
      margin: '2rem 0'
    }
  },
  img: {
    borderRadius: '8px',
    boxShadow: theme.shadows[10]
  },
  left: {
    flex: 1,
  },
  right: {
    display: 'grid',
    placeItems: 'center',
    flex: 1,
  },
  title: {
    fontFamily: 'Truculenta',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  backdrop: {
    
  }
  
}))

export default () => {
  const classes = useStyles();
  
  const [transition, setTransition] = useState(false)

  useEffect(() => {
    setTransition(true);
  }, [])

  return (
    <CSSTransition
      in={transition}
      classNames='fade'
      timeout={1500}
    >
      <Grid id='intro' className={classes.root} container>
        <Grid className={classes.left} item>
          <Typography className={classes.title} variant='h3' component='h1'>Hey! I am Gabriel.</Typography>
          <Typography variant='subtitle1' component='h2'>
            A young, passion-driven developer from Romania. I love developing single
            page applications with React!
          </Typography>
          <Link to='/projects'>
            <Button size='large' variant='contained' color='primary'>My Projects</Button>
          </Link>
        </Grid>
        <Grid className={classes.right} item>
          <img className={classes.img} src={me} width='90%'></img>
        </Grid>
      </Grid>
    </CSSTransition>
  )
}