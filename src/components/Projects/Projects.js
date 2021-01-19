import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { mainProjects } from "./Data";
import { MainProject, Navbar, Footer } from "..";
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const useStyles = makeStyles( theme => ({
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
    top: '0',
    left: '0',
    zIndex: '503',
  },
  sliderArrow: {
    fontSize: '4rem',
    transition: 'all .3s ease-in-out',
    zIndex: '501',
    '&:hover': {
      cursor: 'pointer',
      fontSize: '5rem',
      color: theme.palette.primary.light,
    }
  },
  overlay: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:  '.5rem',
    inset: '0',
  },
}))


export default ({props}) => {
  const classes = useStyles();

  // touch start positions
  let xStart;

  const [slide, setSlide] = useState(0);
  const [styles, setStyles] = useState({transform: 'translateX(-0%);'});

  useEffect(() => {
    setStyles({transform: `translateX(-${slide * 100/mainProjects.length}%)`});
  }, [slide])

  const touchStart = (e) => {
    xStart = e.touches[0].pageX
  }
  const touchEnd = (e) => {
    const xEnd = e.changedTouches[0].pageX;
    console.log(xEnd - xStart);
    // slide to right!
    if(xEnd - xStart > 100) { 
      console.log('slide left to right')
      setSlide(slide <= 0 ? mainProjects.length - 1 : slide - 1);
    }
    if(xEnd - xStart < -100) {
      console.log('slide right to left')
      
      setSlide(slide < mainProjects.length - 1 ? slide + 1 : 0);
    }
  }

  return (
    <Box onTouchStart={(e) => touchStart(e)} onTouchEnd={(e) => touchEnd(e)}>
      <Link className={classes.rootLink} to='/'>
        <Typography variant='h5'>
          <ArrowBackIcon fontSize='large'/>
        </Typography>
      </Link>
      <Grid container direction='column' className={classes.root}>
        <div className={classes.overlay}>
          <NavigateBeforeIcon onClick={() => setSlide(prev => prev !== 0 ? prev - 1 : mainProjects.length - 1)} className={classes.sliderArrow}/>
          <NavigateNextIcon onClick={() => setSlide(prev => prev !== mainProjects.length - 1 ? prev + 1 : 0)} className={classes.sliderArrow}/>
        </div>

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
