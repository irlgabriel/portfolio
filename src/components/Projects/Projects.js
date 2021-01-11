import React, { useState, useEffect } from "react";
import { mainProjects } from "./Data";
import { MainProject, Navbar, Footer } from "..";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles({
  slider: {
    overflowX: 'hidden',
    width: `${mainProjects.length}00%`,
    transition: 'transform .3s ease-in-out',
  },

  noWrap: {
    flexWrap: 'nowrap'
  }
})


export default ({props}) => {
  const classes = useStyles();

  const [slide, setSlide] = useState(0);
  const [styles, setStyles] = useState({transform: 'translateX(0%);'});

  useEffect(() => {
    setStyles({transform: `translateX(${slide}00%)`});
  }, [slide])

  return (
    <div style={styles}>
      <Navbar {...props}/>
      <Grid className={`${classes.slider}`} container>
        {
          mainProjects.map((project, index) => 
            <MainProject key={project.id} {...project} />
          )
        }
      </Grid>
      <Footer />
    </div>
  );
};
