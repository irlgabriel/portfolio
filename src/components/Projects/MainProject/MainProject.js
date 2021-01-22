import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { makeStyles } from '@material-ui/core/styles';
import { mainProjects } from '../Data';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { GiSideswipe } from 'react-icons/gi';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    flexWrap: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    },
  },
  absolute: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  slide: {
    width: `${100/mainProjects.length}%`,
    height: '100%',
  },
  padding: {
    padding: '1rem',
  },
  link: {
    marginRight: '1rem',
    textDecoration: 'none',

  },
  navItem: {
    color: theme.palette.secondary.main,
    transform: 'scale(2)',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(3)',
    }
  },
  projectImage: {
    borderRadius: '6px',
    boxShadow: theme.shadows[10],
  },
  tall: {
    minHeight: '250px',
  },
  techIcon: {
    marginRight: '.5rem',
  },
  divider: {
    margin: '.5rem 0',
    marginTop: '.25rem',
  },
  hint: {
    textAlign: 'right',
  }
}))

export default function MainProject({
  slide,
  setSlide,
  images,
  id,
  name,
  techIcons,
  desc,
  liveURL,
  codeURL,
  
}) {
  const classes = useStyles();



  return (
    <Grid container item className={`${classes.root} ${classes.slide}`}>
      <Grid className={classes.padding} item container  sm={12} md={6} direction='column'>
        <Typography variant='h3'>{name}</Typography>
        <Typography className={classes.hint} variant='overline'>Swipe to switch between projects!</Typography>
        <Divider className={classes.divider}/>
        <img alt='project' className={classes.projectImage} src={images.src} width='100%'/>
      </Grid> 
      <Grid className={`${classes.padding} ${classes.tall}`} spacing={1} item sm={12} md={6}>
        <Typography variant='h4'>Technologies</Typography>
        <div>
          {techIcons.map((icon, index) => (
            <i className={classes.techIcon} key={index}>{icon}</i>
          ))}
        </div>
        <Typography variant='h4'>Description</Typography>
        <Typography variant='subtitle1'>{desc}</Typography>
        <Grid  container>
          <Grid className={classes.link} item component="a" href={liveURL}>
            <Button size='large' color='primary' variant='contained'>Live</Button>
          </Grid>
          <Grid className={classes.link} item component="a" href={codeURL}>
            <Button size='large' color='primary' variant='contained'>Code</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
