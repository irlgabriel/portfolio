import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Header } from '../components';
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
    '& a': {
      textDecoration: 'none',
      color: '#e42929',
    }
  },
  
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
            I am a 22 years old, from Brăila. Currently studying Mechanical Engineering at Transylvania University in Brașov and working full time as a junior react developer for <a className={classes.a} href='https://sensidev.net'>Sensidev</a>!
          </Typography>
        </Grid>
        <img src={me} alt='me' style={{borderRadius: '10px'}} height='406px' />        
      </Grid>

      <Grid className={classes.sectionReversed} item>
        <Grid className={classes.text} item>
          <Typography className={classes.overline} variant='overline' component='h1'>
            Coding.
          </Typography>
          <Typography variant='subtitle' component='p'>
            I like to find unconventional solutions to annoying problems that weigh hard on the team - even as a temporary fix it brings me joy to fix those problems specifically. The joy of having a thing work after countless hours spent on it is hard to match.
          </Typography>
        </Grid>
        <img src={code} alt='code things' />
      </Grid>

      <Grid className={classes.section} item>
        <Grid className={classes.text} item>
          <Typography className={classes.overline} variant='overline' component='h1'>
            Reading
          </Typography>
          <Typography variant='subtitle' component='p'>
            I am reading a lot of different books, here you can see my <a href='https://www.goodreads.com/user/show/121260593-radu-gabriel'>Goodreads</a> profile in case you are interested.
          </Typography>
        </Grid>
        <img src={book} alt='me' style={{borderRadius: '10px'}} height='406px' />        
      </Grid>

      <Grid className={classes.sectionReversed} item>
        <Grid className={classes.text} item>
          <Typography className={classes.overline} variant='overline' component='h1'>
            Working out.
          </Typography>
          <Typography variant='subtitle' component='p'>
            Improving in the gym is my absolute most favorite time of the day. I have been consistently doing this for the past 3 years and it never fails to improve my mood.
          </Typography>
        </Grid>
        <img src={fitness} alt='fitness' />
      </Grid>
    </Grid>
  )
}