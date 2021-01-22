import React from "react";
import { SmallProject } from "../SmallProject/SmallProject";
import { Link } from "react-router-dom";
import { mainProjects as projects, technologies } from "../Projects/Data"
import { CSSTransition } from "react-transition-group"
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  link: {
    transition: 'transform .3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.5)'
    }
  }
})

export default ({theme, setTheme}) => {

  const classes = useStyles();

  return (
    <Grid>
      <Link className={classes.link} to='/what'>
        <Typography variant='h3'>Work</Typography>
      </Link>
      <Link className={classes.link} to='who'>
        <Typography variant='h3'>About</Typography>
      </Link>
      <Link className={classes.link} to='contact'>
        <Typography variant='h3'>Contact</Typography>
      </Link>
  </Grid>
  )
};
