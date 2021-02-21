import React, { useState, useEffect } from 'react'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useInView } from 'react-intersection-observer';
import { CSSTransition } from 'react-transition-group';

const useStyles = makeStyles(theme => ({
  project: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    marginTop: '40px',
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    margin: '0 auto',
    justifyContent: 'space-around',
    marginBottom: '3rem',
    position: 'relative'
  },
  img: {
    display: 'block',
    width: '100%',
    boxShadow: theme.shadows[10]
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
    maxHeight: '300px',
    width: 'auto',
    height: 'auto',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      order: '1 !important',
    },
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    right: '-5%',
    bottom: '0',
    left: '5%',
    zIndex: -51,
    background: 'rgba(25,25,25,.85)',
    transform: 'translateY(-40px)',
  },
}))

export default ({theme, name, images, techIcons, desc, idx}) => {
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
      <Box className='slide-up' ref={ref} p={1}>
        <Grid item className={classes.project}>
          <Box style={{order: idx % 2 === 0 ? 1 : 2}} className={classes.imgContainer}>
            <Box className={classes.backdrop} />
            <img alt='project' className={classes.img} src={images.src}/>
          </Box>
          <Box style={{order: idx % 2 === 1 ? 1 : 2}} className={classes.desc}>
            <Typography component='p' variant='overline'>{name}</Typography>
            {
              techIcons.map((icon, idx) =>
                <span key={idx} className={classes.techIcon}>{icon}</span>
              )
            }
            <Typography variant='subtitle1'>{desc}</Typography>
          </Box>
        </Grid>
      </Box>
    </CSSTransition>
  )
}