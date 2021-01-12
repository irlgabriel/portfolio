import React, { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: "0px 0px 5px 3px rgba(0,0,0,0.25)",
    position: "relative",
    height: "280px",
    margin: theme.spacing(1),
  },
  absolute: {
    position: "absolute", 
    top: "0", 
    left: "0", 
    right: "0", 
    bottom: "0"
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    transition: 'all .15s ease-in-out',
    '&:hover': {
      textDecoration: 'none',
      color: theme.palette.secondary.main,
      cursor: 'pointer',
    }
  },
  backgroundImage: props => ({
    zIndex: '-4',
    backgroundImage: `url(${props.img})`,
    backgroundPosition: 'center',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',

  }),
  overlay: {
    color: '#fff',
    background: 'rgba(70, 72, 82, 0.7)',

  }
}));

export const SmallProject = ({img, name, liveURL, codeURL, desc}) => {
  const classes = useStyles({img: img});

  const proj = useRef();

  const [isInView, setView] = useState(false);

  const handleRef = (e) => {
    proj.current = e;
  }

  

  useEffect(() => {
    const isElementInViewport = () => {
      const rect = proj.current.getBoundingClientRect(); 

      setView(
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
      )

      console.log(isInView);
      
    }
    window.addEventListener("scroll", isElementInViewport);
    return () => {
      window.removeEventListener("scroll", isElementInViewport);
    };
  }, [isInView]);



  return (
    <Grid item xs={12} className={classes.root}>
      <Box ref={(e) => handleRef(e)} className={`${classes.backgroundImage} ${classes.absolute}`} />
      {/**Overlay */}
      <CSSTransition
        in={isInView}
        timeout={500}
        classNames="fade2"
        unmountOnExit
      >
        <Box p={1} className={`${classes.overlay} ${classes.absolute}`}>
          <Typography variant='h4'>{name}</Typography>
          <Typography variant='body2'>{desc}</Typography>
          <Grid spacing={2} item container>
            <Grid className={classes.link} item component="a" href={liveURL}>
              <Button color='primary' variant='contained'>Live</Button>
            </Grid>
            <Grid className={classes.link} item component="a" href={codeURL}>
              <Button color='primary' variant='contained'>Code</Button>
            </Grid>
          </Grid>
        </Box>
      </CSSTransition>
    </Grid>
  )
}