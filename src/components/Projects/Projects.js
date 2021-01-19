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
import { GiSideswipe } from "react-icons/gi";
import { CSSTransition } from 'react-transition-group';

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
    top: '1rem',
    left: '1rem',
    zIndex: '503',
  },
  sliderArrow: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    fontSize: '4rem',
    transition: 'all .3s ease-in-out',
    zIndex: '501',
    '&:hover': {
      cursor: 'pointer',
      fontSize: '5rem',
      color: theme.palette.primary.light,
    }
  },
  swipeIcon: {
    fontSize: '4rem',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  rotate180: {
    transform: 'rotate(180deg)',
  },
  overlay: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:  '.5rem',
    inset: '0',
    [theme.breakpoints.down('xs')]: {
      alignItems: 'flex-end',
    }
  },
  hint: {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(180,180,180,.6)',
    textAlign: 'center',
    inset: '0px',
    zIndex: '901'
  },
  swipeDiv: {
    alignItems: 'center',
    justifyContent: 'space-around'
  }
}))


export default ({props}) => {
  const classes = useStyles();

  console.log(window.innerWidth);

  // touch start horizontal position
  let xStart;

  const [appear, setAppear] = useState(true);
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
    if(xEnd - xStart > 50) { 
      setSlide(slide <= 0 ? mainProjects.length - 1 : slide - 1);
    }
    if(xEnd - xStart < -50) {
      setSlide(slide < mainProjects.length - 1 ? slide + 1 : 0);
    }
  }

  return (
    <Box onTouchStart={(e) => touchStart(e)} onTouchEnd={(e) => touchEnd(e)}>
      {/* Flashes hint to swipe between projects on small devices */}
      <CSSTransition
        appear
        in={appear && window.innerWidth < 600}
        classNames='hint'
        timeout={3000}
        unmountOnExit
        onEntered={() => setAppear(false)}
      >
        <Box className={classes.hint}>
          <Grid container className={classes.swipeDiv}>
            <GiSideswipe className={classes.swipeIcon} />
            <GiSideswipe className={`${classes.swipeIcon} ${classes.rotate180}`} />
          </Grid>
          <Typography variant='h2'>Swipe Left or Right to toggle between projects.</Typography>
        </Box>
      </CSSTransition>
      <Link className={classes.rootLink} to='/'>
        <Typography variant='h5'>
          <ArrowBackIcon fontSize='large'/>
        </Typography>
      </Link>
      <Grid container direction='column' className={classes.root}>
        <div className={classes.overlay}>
          <NavigateBeforeIcon onClick={() => setSlide(prev => prev !== 0 ? prev - 1 : mainProjects.length - 1)} className={classes.sliderArrow}/>
          <NavigateNextIcon onClick={() => setSlide(prev => prev !== mainProjects.length - 1 ? prev + 1 : 0)} className={classes.sliderArrow}/>
          <GiSideswipe className={classes.swipeIcon} />
          <GiSideswipe className={`${classes.swipeIcon} ${classes.rotate180}`} />
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
