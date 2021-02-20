import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
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
  }
  
}))

export default () => {
  const classes = useStyles();

  return (
    <Grid id='projects' className={classes.root} container>
      <Grid className={classes.left} item>
        <Typography variant='h3' component='h1'>Hey! I am Gabriel.</Typography>
        <Typography variant='subtitle1' component='h2'>
          A young, passion-driven developer from Romania. I love developing single
           page applications with React!
        </Typography>
        <a href='#projects'>
          <Button size='large' variant='contained' color='primary'>My Projects</Button>
        </a>
      </Grid>
      <Grid className={classes.right} item>
        <img className={classes.img} src={me} width='90%'></img>
      </Grid>
    </Grid>
  )
}