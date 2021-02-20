import React from 'react'
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
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    margin: '0 auto',
    justifyContent: 'space-around',
    marginBottom: '3rem'
  },
  img: {
    display: 'block',
    maxWidth: '65%',
    maxHeight: '300px',
    width: 'auto',
    height: 'auto',
    boxShadow: theme.shadows[10]
  },
  techIcon: {
    marginRight: '.5rem'
  },
  desc: {
    [theme.breakpoints.down('sm')]: {
      padding: '1rem 0',
    },
    padding: '0 1rem',
  }
}))

export default ({name, images, techIcons, desc, key}) => {
  const classes = useStyles();

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
  });

  return (
    <CSSTransition
      in={inView}
      classNames='slide-up'
      timeout={1000}
      exit={false}
    >
      <Box className='slide-up' ref={ref} p={1}>
        <Grid item className={classes.project}>
          <img className={classes.img} src={images.src}/>
          <Box className={classes.desc}>
            <Typography component='p' variant='overline'>{name}</Typography>
            {
              techIcons.map(icon =>
                <span class={classes.techIcon}>{icon}</span>
              )
            }
            <Typography variant='subtitle1'>{desc}</Typography>
          </Box>
        </Grid>
      </Box>
    </CSSTransition>
  )
}