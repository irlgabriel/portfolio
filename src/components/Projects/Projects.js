import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { mainProjects } from "./Data";
import { MainProject, Navbar, Footer } from "..";
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    
  },
  slider: {
    overflowX: 'hidden',
    width: `${mainProjects.length}00%`,
    transition: 'transform .5s ease-in-out', 
  },

  noWrap: {
    flexWrap: 'nowrap'
  },
  toBottom: {
    marginTop: 'auto'
  },
  rootLink: {
    position: 'absolute',
    top: '-2.5rem',
    left: '0',
  }
})


export default ({props}) => {
  const classes = useStyles();

  const [slide, setSlide] = useState(0);
  const [styles, setStyles] = useState({transform: 'translateX(-0%);'});

  useEffect(() => {
    setStyles({transform: `translateX(-${slide * 100/mainProjects.length}%)`});
  }, [slide])

  return (
    <Box>
      <Link className={classes.rootLink} to='/'>
        <Typography variant='h5'>
          <ArrowBackIcon fontSize='large'/>
        </Typography>
      </Link>
      <Grid container direction='column' className={classes.root}>
        <Box style={{overflow: 'hidden'}}>
          <Grid style={styles} className={`${classes.slider}`} container>
            {
              mainProjects.map((project, index) => 
                <MainProject key={project.id} slide={slide} setSlide={setSlide} {...project} />
              )
            }
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};
