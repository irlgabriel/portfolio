import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { CSSTransition } from 'react-transition-group';
import { Header } from '../Components';
import fitness from '../images/fitness.svg';
import code from '../images/code.svg';
import book from '../images/book.svg';
import me from '../images/me.jpeg'

const useStyles = makeStyles({
  root: {
    flexDirection: 'column',
    padding: '1rem 2rem'
  },
  section: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '1.5rem'
  },
  sectionReversed: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row-reverse',
    marginBottom: '1.5rem'
  },
  overline: {
    lineHeight: '1.5',
    fontSize: '3rem',
    fontWeight: 'bold',
  },
  text: {
    flexBasis: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
            Gabriel Radu
          </Typography>
          <Typography variant='subtitle' component='p'>
            I am a 21 years old first-year mechanical engineering college student.
            
          </Typography>
        </Grid>
        <img src={me} style={{borderRadius: '10px'}} height='406px' />        
      </Grid>

      <Grid className={classes.sectionReversed} item>
        <Grid className={classes.text} item>
          <Typography className={classes.overline} variant='overline' component='h1'>
            Coding.
          </Typography>
          <Typography variant='subtitle' component='p'>
            I love to write code and see it become something real before my eyes. In my work I place a great emphasis on aesthetics and functionality.
            
          </Typography>
        </Grid>
        <img src={code} />
        
      </Grid>
    </Grid>
  )
}