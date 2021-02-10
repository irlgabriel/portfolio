import React, { useRef, useEffect, useState } from "react";
import me from '../../images/me.jpeg';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Divider from '@material-ui/core/Divider';
import { CSSTransition } from 'react-transition-group';
import { makeStyles } from '@material-ui/core/styles';
import { GoLocation } from "react-icons/go";
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
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
    width: 'max(60%, 400px)'
  },
  rightBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    borderRadius: '6px',
    padding: '8px',
    width: 'max(60%, 400px)',
    marginLeft: 'auto',
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

  useEffect(() => {
    const checkVisibleDivs = () => {
      background && !showBackground && setShowBackground(isInViewport(background));
      react && !showReact && setShowReact(isInViewport(react));
      rails && !showRails && setShowRails(isInViewport(rails));
      express && !showExpress && setShowExpress(isInViewport(express));
      others && !showOthers && setShowOthers(isInViewport(others));
    }
    window.addEventListener('scroll', checkVisibleDivs, false);
    return () => window.removeEventListener('scroll', checkVisibleDivs);
  })

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
            <Box ref={background} className={classes.leftBox}>
              <Typography className={classes.title} variant='h3'>
                Background
              </Typography>
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
                time playing video games and naturally I was expected to have a job related working
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
            in={showReact}
            classNames='right-slide'
            timeout={1000}
          >
            <Box ref={react} className={classes.rightBox}>
              <Typography variant='h3' className={classes.title}>
                React
              </Typography>
              <Typography className={classes.desc} variant='subtitle1' style={{marginLeft: "1rem", marginTop: ".5rem"}}>
                
                &nbsp;&nbsp;&nbsp;&nbsp;Lately I got into React and and I have since developed a couple random apps to get better at it. These I consider the most satisfying projects that I developed with React: 
                <a className={classes.link} href='https://irlgabriel.github.io/covid-19-tracker'>this</a> - a small app that implements some (unreliable but free) public APIs and shows relevant covid-19 related stats from your country 
                and around the world, in quite an aesthetically pleasing - if not useful - way, and 
                <a className={classes.link} href='https://fcloneodin.herokuapp.com'>this</a> - an improved facebook clone built with the MERN stack. Not so much satisfying because 
                of its usefulness - of course it doesn't serve any purpose - but because I learned a lot of things while doing it. I would estimate it took me about 150+ hours to build it 
                but I learned a lot of things such as: different kind of authentication flows and their pros and cons, security concerns for small to medium apps. I got introduced to different node libraries for things 
                like image uploading (multer + AWS S3), authentication (passport, jsonwebtoken), env variables (dotenv). That's just what I recall off the top of my head, what I want to say is that I learned a lot of
                things and I wish I had a more useful app to show for it.
                <br /><br />
                &nbsp;&nbsp;&nbsp;&nbsp;Right now I am only working on getting hired, I hardly have any ideas for more projects to showcase my skills - for now anyway. 
                When I am not learning and practicing web development I am probably working out or reading.
              
              </Typography>
            </Box>
          </CSSTransition>
          <CSSTransition
            in={showRails}
            classNames='left-slide'
            timeout={1000}
          >
            <Box ref={rails} className={classes.leftBox}>
              <Typography variant='h3' className={classes.title}>
                Rails
              </Typography> 
            </Box>
          </CSSTransition>
          <CSSTransition
          in={showExpress}
          classNames='right-slide'
          timeout={1000}
          >
            <Box ref={express} className={classes.rightBox}>
              <Typography variant='h3' className={classes.title}>
                Express 
              </Typography>
            </Box>
          </CSSTransition>
          <CSSTransition
            in={showOthers}
            classNames='left-slide'
            timeout={1000}
          >
            <Box ref={others} className={classes.leftBox}>
              <Typography variant='h3' className={classes.title}>
                Other tools
              </Typography> 
            </Box>
          </CSSTransition>
        </Box>
      </Box>
  );
};
