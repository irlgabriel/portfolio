import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { ImageContainer } from "./Mainproject.components";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    height: '150px',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  
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

  return (
    <Grid container item className={`${classes.root}`}>
      <ImageContainer src={images.src} onMouseEnter={() => setMouse(true)} onMouseLeave={() => setMouse(false)} />
      <CSSTransition
        in={isMouseInside}
        timeout={500}
        classNames="fade2"
        unmountOnExit
      >
        <Box className={classes.absolute}>
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
        </Box>
      </CSSTransition>
    </Grid>
  );
}
