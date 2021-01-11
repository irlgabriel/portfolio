import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { ImageContainer } from "./Mainproject.components";
import { makeStyles } from '@material-ui/core/styles';
import { mainProjects } from '../Data';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    minHeight: '100vh',
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
  },
  padding: {
    padding: '.5rem',
  }
}))

export default function MainProject({
  images,
  id,
  name,
  techIcons,
  desc,
  liveURL,
  codeURL,
}) {
  const classes = useStyles();

  const [isMouseInside, setMouse] = useState(false);
  const [firstLoad, setFirstLoad] = useState(false);

  useEffect(() => {
    setFirstLoad(true)
  }, [])

  return (
    <Grid container item className={`${classes.root} ${classes.slide}`}>
      <Grid item xs={12} sm={6}>
        <ImageContainer src={images.src} onMouseEnter={() => setMouse(true)} onMouseLeave={() => setMouse(false)} />
      </Grid> 
      <CSSTransition
        in={firstLoad}
        timeout={300}
        classNames="slide-from-right"
        onExiting={() => setFirstLoad(false)}
      >
        <Grid className={classes.padding} spacing={1} item xs={12} sm={6}>
          <Typography variant='h3'>{name}</Typography>
          <hr />
          <div>
            {techIcons.map((icon, index) => (
              <i key={index}>{icon}</i>
            ))}
          </div>
          <Typography variant='subtitle'>{desc}</Typography>
          <Grid container>
            <Grid item component="a" href={liveURL}>
              Live
            </Grid>
            <Grid item component="a" href={codeURL}>
              Code
            </Grid>
          </Grid>
        </Grid>
      </CSSTransition>
    </Grid>
  );
}
