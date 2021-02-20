import React from 'react';
import Grid from '@material-ui/core/Grid';
import { technologies }from '../data/Data';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    flexDirection: 'column',
    padding: '1rem'
  },
  title: {
    fontSize: '2rem',
  },
  iconContainer: {

  },
  icon: {
    marginRight: '1rem'
  }
})

export default () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container>
      <Grid item>
        <Typography className={classes.title} variant='overline'>Tools</Typography>
      </Grid>
      <Grid item>
        <Grid container>
        {
          technologies.map(tech => 
            <Grid className={classes.icon} item>
              {tech.icon}
            </Grid>
          )
        }
        </Grid>
      </Grid>
    </Grid>
  )
}