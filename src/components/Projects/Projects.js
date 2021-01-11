import React, { useState, useEffect } from "react";
import { mainProjects } from "./Data";
import { MainProject, Navbar, Footer } from "..";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
  },
  slider: {
    overflowX: 'hidden',
    width: `${mainProjects.length}00%`,
    transition: 'transform .3s ease-in-out', 
  },

  noWrap: {
    flexWrap: 'nowrap'
  },
  toBottom: {
    marginTop: 'auto'
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
    <Grid container direction='column' className={classes.root}>
      <Navbar {...props}/>
      <Box style={{overflow: 'hidden'}}>
        <Grid style={styles} className={`${classes.slider}`} container>
          {
            mainProjects.map((project, index) => 
              <MainProject key={project.id} slide={slide} setSlide={setSlide} {...project} />
            )
          }
        </Grid>
      </Box>
      <Box className={classes.toBottom}>
        <Footer/>
      </Box>
    </Grid>
  );
};
