import React, { useRef, useEffect, useState } from "react";
import expressjs from '../../images/expressjs-icon.svg'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Divider from '@material-ui/core/Divider';
import { CSSTransition } from 'react-transition-group';
import { makeStyles } from '@material-ui/core/styles';
import { GoLocation } from "react-icons/go";
import { Link } from 'react-router-dom';
import { SiFirebase } from 'react-icons/si';
import { FaReact, FaAws, FaSass } from 'react-icons/fa';
import { SiRails, SiRuby, SiMaterialUi } from 'react-icons/si';
import { MdComputer } from 'react-icons/md';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    margin: '0',
  },
  alignCenter: {
    alignItems: 'center'
  },

  link: {
    color: theme.palette.text.hint,
    textDecoration: 'none',
    marginLeft: '.25rem',
    '&:hover': {
      transform: 'translateX(0)',
      color: theme.palette.primary.dark,
    }
  },
  rootLink: {
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    zIndex: '503',
    transition: 'all .3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.3)',
    }
  },
  img: {
    float: 'right',
    borderRadius: '6px',
  },
  desc: {
    width: '100%',
    padding: '.5rem',
  },
  hireMe: {
    color: 'pink',
    letterSpacing: '.35rem',
    fontSize: '1.5rem'
  },
  title: {
    letterSpacing: '4px',
  },
  divider: {
    margin: '.5rem 0',
  },
  leftBox: {
    borderRadius: '6px',
    padding: '8px',
    width: 'min(450px, 90%)',
  },
  rightBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    borderRadius: '6px',
    padding: '8px',
    width: 'min(450px, 90%)',
    marginLeft: 'auto',
  },
  tool: {
    fontSize: '1.5rem'
  },
  grid: {
    display: 'flex',
    alignItems: 'center'
  }
}))

export default ({props}) => {
  const classes = useStyles();

  const background = useRef(null);
  const react = useRef(null);
  const rails = useRef(null);
  const express = useRef(null);
  const others = useRef(null);

  const [showBackground, setShowBackground] = useState(false);
  const [showReact, setShowReact] = useState(false);
  const [showRails, setShowRails] = useState(false);
  const [showExpress, setShowExpress] = useState(false);
  const [showOthers, setShowOthers] = useState(false);

  const isInViewport = (element) => {
    // returns true if the element is viewable at all (as soon as any part of it is viewable);
    console.log(element);
    if(!element || !element.current) return false;
    const rect = element.current ? element.current.getBoundingClientRect() : element.getBoundingClientRect();
    return (
        rect.top >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight) ||
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0
    );
    
  }
  const checkVisibleDivs = () => {
    background && !showBackground && setShowBackground(isInViewport(background));
    react && !showReact && setShowReact(isInViewport(react));
    rails && !showRails && setShowRails(isInViewport(rails));
    express && !showExpress && setShowExpress(isInViewport(express));
    others && !showOthers && setShowOthers(isInViewport(others));
  }

  // refresh shown status of refs when scrolling
  useEffect(() => {
    
    window.addEventListener('scroll', checkVisibleDivs, false);
    return () => window.removeEventListener('scroll', checkVisibleDivs);
  })

  // check initial status of shown items on render
  useEffect(() => {
    checkVisibleDivs();
  }, [])

  return (
      <Box className={classes.root} spacing={0} direction='row' p={2} container>
         {/* Absolutely positioned back button */}
        <Link className={classes.rootLink} to='/'>
          <Typography variant='h5'>
            <ArrowBackIcon fontSize='large' />
          </Typography>
        </Link>
        <Box p={2}>
          <Typography variant='h3'>Gabriel, 21</Typography>
          <Grid className={classes.alignCenter} container>
            <GoLocation size={24} fill='lightskyblue' />&nbsp;
            <Typography variant='h5'>Brasov, Romania</Typography>
          </Grid>
          <CSSTransition
            appear
            in={showBackground}
            classNames='left-slide'
            timeout={1000}
          >
            <Box ref={background} style={{opacity: showBackground ? '1' : '0'}} className={classes.leftBox}>
              <Grid className={classes.grid} container>
                <Grid item>
                  <MdComputer size='48' color='gray' />&nbsp;
                </Grid>
                <Grid item>
                  <Typography className={classes.title} variant='h3'>
                    Background
                  </Typography>
                </Grid>
              </Grid>
              <Typography className={classes.desc} variant='subtitle1' style={{marginLeft: "1rem", marginTop: ".5rem"}}>
              {/*<img alt='me' className={classes.img} width='50%' src={me}/>*/}
                {/*
                &nbsp;&nbsp;&nbsp;&nbsp;I am a young aspiring web developer from Romania. 
                Started taking an interest in web development roughly 2-3 years ago with basic HTML and CSS but quicky lost motivation to further my knowledge. 
                Afterwards I got more seriously into it and fell in love with ruby on rails really quickly then 
                fell out of love just as quick after I've found that there's hardly any rails jobs in Romania - that was quite a disappointment as I thought it would put me behind on my 
                goal to get hired as a web developer, but lately as I've got familiar with node and express I started to realize that the rails knowledge came in really handy, and it only made me
                truly appreciate the work that rails gems do to offload a lot of boring (and sometimes complicated) tasks like devise for authentication, active record for database associations, 
                active storage for image uploading and more that I do not recall right now and I am sure there's plenty others useful ones that I didn't have the chance to work with in my very brief journey with rails.
                */}
                &nbsp;&nbsp;&nbsp;&nbsp;I have been interested in computers since as far as I remember. Spent way too much
                time playing video games and naturally I was expected to grow up working
                with computers as well. Nothing new so far, I am sure. 
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;
                So why would you take an interest
                in me then, you might ask. I don't know either honestly, are you that desperate? I am 
                kidding, hopefully. Maybe you're looking for an unpretentious, reasonable, responsible
                junior that needs a chance to make a change for the better? That's all I can think of.
                Let's talk, it might just be worth it for both of us, who knows?
                <br /><br/>
              </Typography>
            </Box>
          </CSSTransition>
          <CSSTransition
            in={showRails}
            classNames='right-slide'
            timeout={1000}
          >
            <Box style={{opacity: showRails ? '1' : '0'}}  ref={rails} className={classes.rightBox}>
              <Grid container className={classes.grid}>
                <Grid item className={classes.grid}>
                  <SiRuby size='32' color='red' /> &nbsp;&nbsp;
                  <SiRails size='48'/>&nbsp;&nbsp;
                </Grid>
                <Grid item>
                  <Typography variant='h3' className={classes.title}>
                    Ruby on Rails
                  </Typography>
                </Grid>
                
              </Grid>
              <Typography className={classes.desc} variant='subtitle1' style={{marginLeft: "1rem", marginTop: ".5rem"}}>
                &nbsp;&nbsp;&nbsp;&nbsp;This is where I first started, about three years ago. I wanted to get into web development and everyone 
                seemed to say that ruby and ruby on rails are the best first step for any beginner. I am not sure I totally 
                agree now. Ruby surely is easy and satisfying to learn, but surprisingly I get frustrated when I don't know 
                how certain things happen, and rails does a lot of behind-the-scenes magic for simple, albeit repetitive, tasks 
                like routing, or forms. I didn't feel like I was learning anything - maybe that's why I dropped the whole web-dev idea 
                altogether shortly afterward.
              </Typography>
            </Box>
          </CSSTransition>
          <CSSTransition
            in={showReact}
            classNames='left-slide'
            timeout={1000}
          >
            <Box style={{opacity: showReact ? '1' : '0'}}  ref={react} className={classes.leftBox}>
              <Grid className={classes.grid} container>
                <Grid item>
                  <FaReact color='lightskyblue' size='32' />&nbsp;&nbsp;
                </Grid>
                <Grid Item>
                  <Typography variant='h3' className={classes.title}>
                    React
                  </Typography>
                </Grid>
              </Grid>
              <Typography className={classes.desc} variant='subtitle1' style={{marginLeft: "1rem", marginTop: ".5rem"}}>
                &nbsp;&nbsp;&nbsp;&nbsp;
                Got introduced to react nearly 6 months ago and I am enjoying every single part of it. I am writing 
                react with functional components and hooks because it seems more intuitive to me.
                I read that this is the more modern approach anyway so win-win scenario if you ask me.
              </Typography>
            </Box>
          </CSSTransition>
          <CSSTransition
          in={showExpress}
          classNames='right-slide'
          timeout={1000}
          >
            <Box style={{opacity: showExpress ? '1' : '0'}}  ref={express} className={classes.rightBox}>
              <Grid className={classes.grid} container>
                <Grid item>
                  <img src={expressjs} />&nbsp;&nbsp;                
                </Grid>
                <Grid item>
                  <Typography variant='h3' className={classes.title}>Express</Typography>
                </Grid>
              </Grid>
              <Typography className={classes.desc} variant='subtitle1' style={{marginLeft: "1rem", marginTop: ".5rem"}}>
                Node and express were the natural choice since I was already 
                familiar with javascript. Shortly after getting the handle of express' 
                basics principles 
                I quicky understood why rails is so popular and all the articles 
                I read years ago started to make sense once I had to implement routes, 
                write authentication logic, 
                provide a database solution for the app, and so on.
              </Typography>
            </Box>
          </CSSTransition>
          <CSSTransition
            in={showOthers}
            classNames='left-slide'
            timeout={1000}
          >
            <Box style={{opacity: showOthers ? '1' : '0'}}  ref={others} className={classes.leftBox}>
              <Typography variant='h3' className={classes.title}>
                Other tools
              </Typography>
              {/* Firebase */}
              <Grid className={classes.grid} container>
                <Grid item>
                  <SiFirebase color='orange' size='32'/>&nbsp;
                </Grid>
                <Grid item>
                  <Typography variant='caption' className={classes.tool}>Firebase</Typography>
                </Grid>
              </Grid>
              
              <Typography className={classes.desc} variant='subtitle1' style={{marginLeft: "1rem"}}>
                &nbsp;&nbsp;&nbsp;&nbsp;Before learning a back-end language 
                well enough, I have used google firebase' services such as firestore - a noSQL database service - or 
                authentication - a simple authentication service with support for a lot of oAuth strategies and also 
                a intuitive GUI dashboard for managing users.
              </Typography>

              {/* AWS */}
              <Grid className={classes.grid} container>
                <Grid item>
                  <FaAws color='#CCCC00' size='32'/>&nbsp;&nbsp;
                </Grid>
                <Grid item>
                  <Typography variant='caption' className={classes.tool}>Amazon Web Services</Typography>
                </Grid>
              </Grid>
              <Typography className={classes.desc} variant='subtitle1' style={{marginLeft: "1rem"}}>
              &nbsp;&nbsp;&nbsp;&nbsp;I have implemented Amazon's S3 storage service with express and react to upload/edit/delete images, 
                handling all the file naming and cleaning up login myself.
              </Typography>

              {/* MUI */}
              <Grid className={classes.grid} container>
                <Grid item>
                  <SiMaterialUi size='32'/>&nbsp;&nbsp;
                </Grid>
                <Grid item>
                  <Typography variant='caption' className={classes.tool}>MaterialUI</Typography>
                </Grid>
              </Grid>
              <Typography className={classes.desc} variant='subtitle1' style={{marginLeft: "1rem"}}>
              &nbsp;&nbsp;&nbsp;&nbsp;This is the main CSS framework that I use right now. I used bootstrap with reactstrap and 
                I am quite familiar with it as well, but I seem to enjoy this one 
                a lot more.
              </Typography>

              {/* SASS */}
              <Grid className={classes.grid} container>
                <Grid item>
                  <FaSass color='red' size='32'/>&nbsp;&nbsp;
                </Grid>
                <Grid item>
                  <Typography variant='caption' className={classes.tool}>Sass</Typography>
                </Grid>
              </Grid>
              <Typography className={classes.desc} variant='subtitle1' style={{marginLeft: "1rem"}}>
              &nbsp;&nbsp;&nbsp;&nbsp;I am using SASS for css pre-processing. I will be honest, 
                I am not acquainted with most of its features, 
                it only makes styling easier with the reference symbol(&) nesting, 
                especially transitions.
              </Typography>
            </Box>
          </CSSTransition>
        </Box>
      </Box>
  );
};
