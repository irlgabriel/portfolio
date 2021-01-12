import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { makeStyles } from '@material-ui/core/styles';
import { mainProjects } from '../Data';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    flexWrap: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
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
    padding: '1rem',
  },
  link: {
    marginRight: '1rem',
    textDecoration: 'none',

  },
  overlay: {
    position: 'absolute',
    inset: '0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 1.5rem'
  },
  navItem: {
    color: theme.palette.primary.main,
    transform: 'scale(2)',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(3)',
    }
  },
  projectImage: {
    borderRadius: '6px',
    boxShadow: theme.shadows[2],
  },
  tall: {
    minHeight: '250px',
  },
  techIcon: {
    marginRight: '.5rem',
  },
  divider: {
    margin: '.5rem 0',
  }
}))

export default function MainProject({
  slide,
  setSlide,
  images,
  id,
  name,
  techIcons,
  desc,
  liveURL,
  codeURL,
  
}) {
  const classes = useStyles();

  const [firstLoad, setFirstLoad] = useState(false);

  useEffect(() => {
    setFirstLoad(true)
  }, [])

  return (
    <Grid container item className={`${classes.root} ${classes.slide}`}>
      <Grid className={classes.padding} item container  sm={12} md={6} direction='column'>
        <div className={classes.overlay}>
          <NavigateBeforeIcon onClick={() => setSlide(prev => prev !== 0 ? prev - 1 : mainProjects.length - 1)} className={classes.navItem}/>
          <NavigateNextIcon onClick={() => setSlide(prev => prev !== mainProjects.length - 1 ? prev + 1 : 0)} className={classes.navItem}/>

        </div>
        <Typography variant='h3'>{name}</Typography>
        <Divider className={classes.divider}/>
        <img alt='project' className={classes.projectImage} src={images.src} width='100%'/>
      </Grid> 
      <CSSTransition
        in={firstLoad}
        timeout={300}
        classNames="slide-from-right"
        onExiting={() => setFirstLoad(false)}
      >
        <Grid className={`${classes.padding} ${classes.tall}`} spacing={1} item sm={12} md={6}>
          <Typography variant='h4'>Technologies</Typography>
          <div>
            {techIcons.map((icon, index) => (
              <i className={classes.techIcon} key={index}>{icon}</i>
            ))}
          </div>
          <Typography variant='h4'>Description</Typography>
          <Typography variant='subtitle'>{desc}</Typography>
          <Grid  container>
            <Grid className={classes.link} item component="a" href={liveURL}>
              <Button color='primary' variant='contained'>Live</Button>
            </Grid>
            <Grid className={classes.link} item component="a" href={codeURL}>
              <Button color='primary' variant='contained'>Code</Button>
            </Grid>
          </Grid>
        </Grid>
      </CSSTransition>
    </Grid>
  );
}
