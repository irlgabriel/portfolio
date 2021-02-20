import React, { useState, useEffect } from 'react';

import Typography from '@material-ui/core/Typography';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Divider from '@material-ui/core/Divider';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Switch as MaterialSwitch } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';

const useStyles = makeStyles(theme => ({
  root: {
    //position: 'relative',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '1rem',
  },
  switch: {
    display: 'inline-flex',
    alignItems: 'center',
  },
  navLinks: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: '1',
    '& a': {
      color: theme.palette.text.primary,
      textDecoration: 'none',
      transition: 'all .15s ease-in-out',
      '&:hover': {
        color: theme.palette.text.secondary,
      }
    },
    '& h5': {
      // <960px
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
      flex: '1',
    }
  },
  menu: {
    [theme.breakpoints.down('sm')]: {
      display: 'inline-flex',
    },
    display: 'none',
    cursor: 'pointer',
    transition: 'transform .15s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)'
    }
  },
  me: {
    flex: '2',
    fontSize: '24px',
  },
  divider: {
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    },
    display: 'none',
    position: 'absolute',
    bottom: '16px',
    left: '16px',
    right: '16px',
  },
  menuOverlay: { 
    zIndex: '51',
    position: 'absolute',
    top: '95px',
    left: '0px',
    right: '0px',
    bottom: '0px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    background: theme.palette.background.default,
    '& div > h5': {
      display: 'flex',
      justifyContent: 'center'
    },
    '& div > h5 > a': {
      fontSize: '1.5rem',
      color: theme.palette.text.primary,
      textDecoration: 'none',
      transition: 'all .15s ease-in-out',
      '&:hover': {
        color: theme.palette.text.secondary,
      }
    }
  }
  
}))

export default ({theme, setTheme}) => {
  const classes = useStyles();

  const [showMenu, setMenu] = useState(false);

  const handleOnChange = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }

  const checkSize = () => {
    if (window.innerWidth > 960) setMenu(false);
  }

  // dismount menuOverlay when window is resized >960px
  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  })

  useEffect(() => {
    showMenu 
    ? document.body.style.overflow = 'hidden'
    : document.body.style.overflow = 'unset';
  }, [showMenu])

  return (
    <Grid container className={classes.root}> 
    {/** Switch */}
    <Grid item>
        <FormControlLabel
          control={
            <MaterialSwitch 
            checked={theme == 'dark'}
            onChange={() => handleOnChange()}
            />
          }
          className={classes.switch}
          label={
            <Box
              className={classes.switch}
            >
              <NightsStayIcon fontSize='large' />
            </Box>
          }
        />
      </Grid>
    {/** Links */}
      <Grid item className={classes.navLinks}>
        <Typography className={classes.me} variant='overline' component='h4'>
          <a href='#intro'>Gabriel Radu</a>
        </Typography>

        {/** >960px Links */}
        <Typography variant='overline' component='h5'>
          <a href='#about-me'>About Me</a>
        </Typography>
        <Typography variant='overline' component='h5'>
          <a href='#projects'>Projects</a>
        </Typography>
        <Typography variant='overline' component='h5'>
          <a href='#skills'>Skills</a>
        </Typography>
        <Typography variant='overline' component='h5'>
          <a href='#contact'>Contact</a>
        </Typography>
      </Grid>

      
      {/* <960px Mobile Menu Button */}
      <Grid onClick={() => setMenu(prev => !prev)} item className={classes.menu}>
        <TransitionGroup component={null}>
          <CSSTransition
            timeout={500}
            classNames='fade'
          >
            {!showMenu ? <GiHamburgerMenu size={32}/> : <ImCross size={32}/> }
          </CSSTransition>
          
        </TransitionGroup>
      </Grid>
      
      {/* Mobile Menu Overlay */}
      <CSSTransition
        in={showMenu}
        classNames='fade'
        timeout={500}
        unmountOnExit
      >
        <Grid container class={classes.menuOverlay}>
          <Grid item>
            <Typography variant='overline' component='h5'>
              <a onClick={() => setMenu(false)} href='#about-me'>About Me</a>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='overline' component='h5'>
              <a onClick={() => setMenu(false)} href='#projects'>Projects</a>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='overline' component='h5'>
              <a onClick={() => setMenu(false)} href='#skills'>Skills</a>
            </Typography>
          </Grid>
          
          <Grid item>
            <Typography variant='overline' component='h5'>
              <a onClick={() => setMenu(false)} href='#contact'>Contact</a>
            </Typography>
          </Grid>
        </Grid>
      </CSSTransition>
      {/* Absolutely positioned divider at the bottom */}
      <Divider className={classes.divider} />
    </Grid>
  )
}