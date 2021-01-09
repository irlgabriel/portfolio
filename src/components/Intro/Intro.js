import React, { useState } from "react";
import { SmallProject } from "../SmallProject/SmallProject";
import { Link } from "react-router-dom";
import { mainProjects, technologies } from "../Projects/Data"
import { CSSTransition } from "react-transition-group"
import { Technology } from './Intro.components';
import { Navbar } from '..';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    transition: 'all .15s ease-in-out',
    '&:hover': {
      textDecoration: 'none',
      color: theme.palette.secondary.main
    }
  }
}))

export default () => {
  const classes = useStyles();

  const [firstLoad, setFirstLoad] = useState(true);

  return (
    
    <Grid spacing={0} background='primary' direction='column' container>
      <Grid item>
        <Navbar />
      </Grid>
      <Grid spacing={0} container>
        <CSSTransition
          appear
          in={firstLoad}
          timeout={500}
          classNames="slide-from-left"
          onEntered={() => setFirstLoad(false)}
        >
          <Grid component={Box} p={1} item xs={12} lg={6}>
            <Typography variant='h1' component='h1'>About me</Typography>
            <Typography variant='h2' component='h2'>Gabriel, 21</Typography>
            <Box>
              <Typography variant='h5'>Brasov/Braila, Romania</Typography>
            </Box>
            <Box p={1} >
              <Typography component='p' variant='subtitle2'>Technologies</Typography>
              {
                technologies.map(tech => 
                  <>
                    <Technology>
                      {tech.icon}
                      <Typography variant='subtitle1'>{tech.name}</Typography>
                    </Technology>  
                    <br />
                  </>
                )
              }
            </Box>
            <Button
              component={Link}
              color='primary'
              variant='contained'
              to='/who'
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
          <Grid component={Box} p={1} item xs={12} lg={6}>
            <Typography variant='h1'>My work</Typography>
            <Typography variant='h4'>
              Currently working on&nbsp;
              <a className={classes.link} href="https://github.com/irlgabriel/reddit-clone">
                this reddit clone with the MERN stack.
              </a>
            </Typography>
            <Grid spacing={0} container>
              {
                mainProjects.map(project => 
                  <SmallProject codeURL={project.codeURL} liveURL={project.liveURL} key={project.key} img={project.images.src} name={project.name}/>
                )
              }
            </Grid>
            <Button
              component={Link}
              color='primary'
              variant='contained'
              to='/what'
            >
              SEE MORE
            </Button>    
          </Grid>
        </CSSTransition>

        {/* Absolutely positioned */}
      </Grid>
    </Grid>
  )
};
