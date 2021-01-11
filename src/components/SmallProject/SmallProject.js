import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'

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

export const SmallProject = ({img, name, liveURL, codeURL}) => {
  const classes = useStyles({img: img});

  const [showOverlay, setOverlay] = useState(false);

  return (
    <Grid item xs={12} className={classes.root} onMouseEnter={() => setOverlay(true)} onMouseLeave={() => setOverlay(false)}>
      <div className={`${classes.backgroundImage} ${classes.absolute}`} />
      {/**Overlay */}
      <CSSTransition
        in={showOverlay}
        timeout={500}
        classNames="fade2"
        unmountOnExit
      >
        <div className={`${classes.overlay} ${classes.absolute}`}>
          <Typography variant='h4'>{name}</Typography>
          <Grid spacing={2} item container>
            <Grid className={classes.link} item component='a' href={liveURL}>
              <Typography variant='h5'>Live</Typography>
            </Grid>
            <Grid className={classes.link} item component='a' href={codeURL}>
              <Typography variant='h5'>Code</Typography>
            </Grid>
          </Grid>
        </div>
      </CSSTransition>
    </Grid>
  )
}