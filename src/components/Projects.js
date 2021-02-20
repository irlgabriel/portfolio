import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { projects } from '../data/Data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '1rem',
    '& .MuiTypography-overline': {
      fontSize: '2rem',
      lineHeight: '1.5'
    },
    '& .MuiTypography-h3': {
      margin: '1rem 0'
    }
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    width: '50%',
    margin: '0 auto'
  },
  project: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    margin: '0 auto',
    justifyContent: 'space-around',
    marginBottom: '3rem'
  },
  img: {
    display: 'block',
    maxWidth: '65%',
    maxHeight: '300px',
    width: 'auto',
    height: 'auto',
    boxShadow: theme.shadows[10]
  },
  techIcon: {
    marginRight: '.5rem'
  },
  desc: {
    [theme.breakpoints.down('sm')]: {
      padding: '1rem 0',
    },
    padding: '0 1rem',
  }
}))


export default () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container>
      <Box className={classes.title}>
        <Typography variant='h3'>Projects</Typography>
      </Box>
      {
        projects.map(project =>
          <Grid item className={classes.project}>

            <img className={classes.img} src={project.images.src}/>
            <Box className={classes.desc}>
              <Typography component='p' variant='overline'>{project.name}</Typography>
              {
                project.techIcons.map(icon =>
                  <span class={classes.techIcon}>{icon}</span>
                )
              }
              <Typography variant='subtitle1'>{project.desc}</Typography>
            </Box>
          </Grid>
        )
      }
    </Grid>
  )
}