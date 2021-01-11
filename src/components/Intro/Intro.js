import React, { useState, useEffect } from "react";
import { SmallProject } from "../SmallProject/SmallProject";
import { Link } from "react-router-dom";
import { mainProjects, technologies } from "../Projects/Data"
import { CSSTransition } from "react-transition-group"
import { Technology } from './Intro.components';
import { Navbar, Footer } from '..';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    transition: 'all .15s ease-in-out',
    '&:hover': {
      textDecoration: 'none',
      color: theme.palette.secondary.main
    }
  },
  technologyItem: {
    display: 'flex',
    alignItems: 'center',
    userSelect: 'none',
    transition: 'all .2s ease-in-out',
    marginBottom: '.5rem',
    '&:hover': {
    transform: 'scale(1.05)',
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    }
  },
  fullWidthMdDown: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      flex: '1',
      display: 'block'
    }
  },
  centerSmDown: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    }
  },
  flexBreak: {
    flexBasis: '100%',
    height: 0
  },
  justifyContentBetween: {
    justifyContent: 'space-between'
  }
}))

export default ({props}) => {
  const classes = useStyles();
  console.log(props);

  const [firstLoad, setFirstLoad] = useState(false);

  useEffect(() => {
    setFirstLoad(true);
  }, [])

  return (

    <Grid spacing={0} background='primary' direction='column' container>
      <Grid item>
        <Navbar {...props}/>
      </Grid>
      <Grid spacing={0} container>
        <CSSTransition
          appear
          in={firstLoad}
          timeout={500}
          classNames="slide-from-left"
          onEntering={() => setFirstLoad(false)}
        >
          <Grid component={Box} p={3} item xs={12} md={6}>
            <Typography variant='h1' component='h1'>About me</Typography>
            <Typography variant='h2' component='h2'>Gabriel, 21</Typography>
            <Typography variant='h5'>Brasov/Braila, Romania</Typography>
            <Typography component='p' variant='subtitle2'>Technologies</Typography>
            <Grid container direction='column'>
              {
                technologies.map(tech => 
                <div className={classes.technologyItem}>
                  {tech.icon}
                  <Typography variant='subtitle1'>{tech.name}</Typography>
                </div>  
                )
              }
               
            </Grid>
            <Button
                component={Link}
                color='primary'
                variant='contained'
                to='/who'
                className={classes.fullWidthMdDown}
              >
                SEE MORE
              </Button>
          </Grid>
        </CSSTransition>
        <CSSTransition
          appear
          in={firstLoad}
          timeout={500}
          classNames="slide-from-right"
          onExit={() => setFirstLoad(false)}
        >
          <Grid  component={Box} p={2} item xs={12} md={6}>
            <Typography variant='h1'>My work</Typography>
            <Typography variant='h4'>
              Currently working on&nbsp;
              <a className={classes.link} href="https://github.com/irlgabriel/reddit-clone">
                this reddit clone with the MERN stack.
              </a>
            </Typography>
            <Grid spacing={0} container className={`${classes.centerSmDown} ${classes.justifyContentBetween}`}>
              {
                mainProjects.map(project => 
                  <SmallProject codeURL={project.codeURL} liveURL={project.liveURL} key={project.key} img={project.images.src} name={project.name}/>
                )
              }
              <div className={classes.flexBreak} />
              <Button
                style={{marginLeft: '.5rem'}}
                component={Link}
                color='primary'
                variant='contained'
                to='/what'
                className={classes.fullWidthMdDown}
              >
                SEE MORE
              </Button>
            </Grid>
                
          </Grid>
        </CSSTransition>

        {/* Absolutely positioned */}
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>

  )
};
