import React, { useState } from 'react';

import Typography from '@material-ui/core/Typography';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Divider from '@material-ui/core/Divider';
import { Switch as MaterialSwitch } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { GiHamburgerMenu } from 'react-icons/gi';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
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
  flexBreak: {
    flexBasis: '0',
    height: '0',
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
  }
  
}))

export default ({theme, setTheme}) => {
  const classes = useStyles();

  const [showMenu, setMenu] = useState(false);

  const handleOnChange = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }

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
          <a href='#projects'>Projects</a>
        </Typography>
        <Typography variant='overline' component='h5'>
          <a href='#tools'>Tools</a>
        </Typography>
        <Typography variant='overline' component='h5'>
          <a href='#about-me'>About Me</a>
        </Typography>
        <Typography variant='overline' component='h5'>
          <a href='#contact'>Contact</a>
        </Typography>
      </Grid>

      
      {/* <960px Mobile Menu */}
      <Grid onClick={() => setMenu(prev => !prev)} item className={classes.menu}>
        <GiHamburgerMenu size={32} />
      </Grid>
      

      {/* Absolutely positioned divider at the bottom */}
      <Divider className={classes.divider} />
    </Grid>
  )
}