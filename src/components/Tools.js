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
    textAlign: 'center',  
    fontFamily: 'Truculenta',
  },
  techContainer: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '1rem',
  },
  iconContainer: {
    position: 'relative',
    borderRadius: '12px',
    height: '120px',
    width: '120px',
    display: 'grid',
    placeItems: 'center',
    background: 'rgba(140,140,140,.6)',
    zIndex: '2',
    transition: 'transform .35s ease-in-out',
    cursor: 'pointer',
    transform: 'scale(1.1)'
    }

})

export default () => {
  const classes = useStyles();

  return (
    <Grid id='tools' className={classes.root} container>
      <Grid item>
        <Typography component='h2' className={classes.title} variant='h3'>Tools</Typography>
      </Grid>
      <Grid className={classes.techContainer} item container>
      {
        technologies.map(tech => 
          <Grid key={tech.name} className={classes.iconContainer} item>
            {tech.icon}
          </Grid>
        )
      }
      </Grid>
    </Grid>
  )
}