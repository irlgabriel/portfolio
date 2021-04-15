import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: props => props.right ? 'left' : 'right',
    position: 'absolute',
    top: props => `${300 * props.order + 60}px`,
    right: props => props.left ? '65%' : 'inherit',
    left: props => props.right ? '65%' : 'inherit',
    padding: '1rem',
    [theme.breakpoints.down('xs')]: {
      right: 'unset !important',
      left: '40% !important',
      textAlign: 'right !important',
      top: props => `${450 * props.order + 60}px`,
    }
  },
  title: {
    fontSize: '2rem',
    [theme.breakpoints.down('xs')]: {
      lineHeight: '1.25',
    }
    
  },
  subtitle: {
    fontSize: '1.5rem',
    [theme.breakpoints.down('xs')]: {
      lineHeight: '1.25',
    }
  }
}))

export default (props) => {
  const classes = useStyles(props);

  return (
    <Box className={classes.root}>
      <Typography variant='overline' className={classes.title}>{props.title}</Typography>
      <Typography component='h1' variant='subtitle2' className={classes.subtitle}>{props.subtitle}</Typography>
      <Typography component='p' variant='body1'>{props.info}</Typography>
    </Box>
  )
}