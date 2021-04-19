import React, { useState, useEffect } from 'react'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useInView } from 'react-intersection-observer';
import { CSSTransition } from 'react-transition-group';

import Button from '@material-ui/core/Button'
import { TiMediaRecord } from 'react-icons/ti';
import { AiOutlineCode } from 'react-icons/ai';


const useStyles = makeStyles((theme) => ({
  root: {
    '&:nth-child(odd)': {
      background: theme.palette.primary.main
    },
  },
  project: {
    padding: '0 5%',
    
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    marginTop: '60px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: '3rem',
    position: 'relative'
  },
  img: {
    display: 'block',
    width: '100%',
    boxShadow: theme.shadows[10],
    zIndex: '53',
  },
  techIcon: {
    marginRight: '.5rem'
  },
  desc: {
    [theme.breakpoints.down('sm')]: {
      order: '2 !important',
      padding: '1rem 0',
    },
    padding: '0 1rem',
  },
  imgContainer: {
    marginRight: '5%',
    marginLeft: '5%',
    maxWidth: '65%',
    //maxHeight: '300px',
    width: 'auto',
    height: 'auto',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      order: '1 !important',
    },
  },
  linkSection: {
    '& a': {
      textDecoration: 'none',
      alignItems: 'center',
      marginRight: '1rem',
      display: 'flex',
    },
    
  }
}))

export default ({theme, name, images, techIcons, desc, idx, liveURL, codeURL}) => {
  const classes = useStyles();
  const [enteredInView, setEntered] = useState(false);

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) setEntered(true);
  }, [inView])

  useEffect(() => {
    setEntered(false);
  }, [theme])

  return (
    <CSSTransition
      in={enteredInView}
      classNames='slide-up'
      timeout={1000}
      exit={false}
    >
      <Box className={`${classes.root} slide-up`} ref={ref} p={1}>
        <Grid item className={classes.project}>
          <Box style={{order: idx % 2 === 0 ? 1 : 2}} className={classes.imgContainer}>
            <img alt='project' className={classes.img} src={images.src}/>
          </Box>
          <Box style={{order: idx % 2 === 1 ? 1 : 2}} className={classes.desc}>
            <Typography style={{fontSize: '2rem', fontWeight: 'bold', lineHeight: '1.2'}} component='p' variant='overline'>{name}</Typography>
            {
              techIcons.map((icon, idx) =>
                <span key={idx} className={classes.techIcon}>{icon}</span>
              )
            }
            <Typography variant='subtitle1'>{desc}</Typography>
            <Grid container>
              <Grid className={classes.linkSection} item>
                <a href={liveURL}>
                  <TiMediaRecord size='48px' color='green' />
                  <Button variant='contained' color='secondary'>LIVE</Button>
                </a>
              </Grid>
              <Grid className={classes.linkSection} item>
                <a href={codeURL}>
                  <AiOutlineCode size='48px' color='gray' />
                  <Button variant='contained' color='secondary'>CODE</Button>
                </a>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </CSSTransition>
  )
}