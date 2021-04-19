import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { CSSTransition } from 'react-transition-group';
import { Header } from '../Components';
import fitness from '../images/fitness.svg';
import code from '../images/code.svg';
import book from '../images/book.svg';

const useStyles = makeStyles({
  root: {
    flexDirection: 'column',
    padding: '1rem 2rem'
  },
  section: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  overline: {
    lineHeight: '1.5',
    fontSize: '3rem',
    fontWeight: 'bold',
  },
  text: {
    flexBasis: '50%',
    display: 'flex',
    justifyContent: 'center',
  }
});

export default ({theme, setTheme}) => {
  const classes = useStyles()

  return (
    <Grid theme={theme} className={classes.root} container>
      <Grid item>
        <Header theme={theme} setTheme={setTheme}/>
      </Grid>

      <Grid className={classes.section} item>
        <Grid className={classes.text} item>
          <Typography className={classes.overline} variant='overline' component='h1'>
            Coding.
          </Typography>
          <Typography variant='subtitle' component='p'>

          </Typography>
        </Grid>
        <img src={code} />
      </Grid>
    </Grid>
  )
}