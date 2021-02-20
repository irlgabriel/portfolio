import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import cloud from '../images/cloud.svg'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '1rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      flex: '0 1',
    }
  },
  flexItem: {
    [theme.breakpoints.down('sm')]: {
      '&:first-of-type': {
        order: 2,
      },
      '&:last-of-type': {
        order: 1,
      }
    },
    flex: 1,
    display: 'grid',
    placeItems: 'center'
  }, 
  desc: {
    fontFamily: 'Truculenta'
  }
}))


export default () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container>
      <Grid className={classes.flexItem} item>
        <Typography className={classes.desc} variant='h4' component='p'>
          I love writing clean code and building simple looking pages with 
          smooth transitions.
        </Typography>
      </Grid>
      <Grid className={classes.flexItem} item>
        <img className='cloud' src={cloud} width='50%' />
      </Grid>
    </Grid>
  )
}