import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { projects } from '../data/Data';

const useStyles = makeStyles(theme => ({
  root: {
    //
  },
  project: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    display: 'flex',
    flexDirection: 'row-reverse',
    width: '90%',
    margin: '0 auto',
    justifyContent: 'space-around',
  },
  img: {
    display: 'block',
    maxWidth: '460px',
    maxHeight: '190px',
    width: 'auto',
    height: 'auto',
    boxShadow: theme.shadows[10]
  }
}))


export default () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container>
      {
        projects.map(project =>
          <Grid item className={classes.project}>
            <Typography component='p' variant='overline'>{project.name}</Typography>
            <img className={classes.img} src={project.images.src}/>
          </Grid>
        )
      }
    </Grid>
  )
}