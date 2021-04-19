import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { CSSTransition } from 'react-transition-group';
import me from '../images/me.jpeg';
import designer from '../images/designer.svg'

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
    [theme.breakpoints.down('sm')]:{
      marginTop: '40px'
    },
    position: 'relative',
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
    position: 'absolute',
    top: 0,
    right: '5%',
    bottom: '0',
    left: '15%',
    zIndex: -51,
    background: 'rgba(25,25,25,.85)',
    transform: 'translateY(-40px)',
  },
  link: {
    textDecoration: 'none',
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
      classNames='bubble'
      timeout={1000}
    >
      <Grid id='intro' className={classes.root} container>
        <Grid className={classes.left} item>
          <Typography className={classes.title} variant='h3' component='h1'>Hey! I am Gabriel.</Typography>
          <Typography variant='subtitle1' component='h2'>
            A young, passion-driven developer from Romania. I love developing single
            page applications with React!
          </Typography>
          <Link className={classes.link} to='/projects'>
            <Button size='large' variant='contained' color='secondary'>My Projects</Button>
          </Link>
        </Grid>
        <Grid className={classes.right} item>
          <Box className={classes.backdrop} />
          <img alt='me' className={classes.img} src={designer} width='80%'></img>
        </Grid>
      </Grid>
    </CSSTransition>
  )
}