import React from 'react';

import Typography from '@material-ui/core/Typography';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Switch as MaterialSwitch } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
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
    [theme.breakpoints.up('sm')]: {
      display: 'inline-flex',

    }
  },
  me: {
    flex: '2',
    fontSize: '24px',
  }
}))

export default ({theme, setTheme}) => {
  const classes = useStyles();

  const handleOnChange = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }

  return (
    <Grid container className={classes.root}> 
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

        {/* <960px Mobile Menu */}
      </Grid>

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
              <Typography variant='overline'>Dark mode</Typography>
            </Box>
          }
        />
      </Grid>
    </Grid>
  )
}