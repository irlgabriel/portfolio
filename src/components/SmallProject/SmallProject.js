import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: "0px 0px 5px 3px rgba(0,0,0,0.75)",
    position: "relative",
    height: "200px",
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
    background: `#fff url(${props.img}) no-repeat center cover`,
    position: "absolute", 
    top: "0", 
    left: "0", 
    right: "0", 
    bottom: "0",
  })
}));

export const SmallProject = ({img, name, liveURL, codeURL}) => {
  const classes = useStyles({img: img});

  const [showOverlay, setOverlay] = useState(false);

  return (
    <Grid item xs={6} md={3} className={classes.root} onMouseEnter={() => setOverlay(true)} onMouseLeave={() => setOverlay(false)}>
      <div className={classes.backgroundImage} />
      {/**Overlay */}
      <CSSTransition
        in={showOverlay}
        timeout={500}
        classNames="fade2"
        unmountOnExit
      >
         <div>
        <Typography variant='h4'>{name}</Typography>
        <Grid item container>
          <Grid className={classes.link} item component='a' href={liveURL}>Live</Grid>
          <Grid className={classes.link} item component='a' href={codeURL}>Code</Grid>
        </Grid>
      </div>
      </CSSTransition>
    </Grid>
  )
}