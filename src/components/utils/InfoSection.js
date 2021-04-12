import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    textAlign: props => props.right ? 'left' : 'right',
    position: 'absolute',
    top: props => `${300 * props.order + 40}px`,
    right: props => props.left ? '65%' : 'inherit',
    left: props => props.right ? '65%' : 'inherit',
    padding: '1rem',
  },
  title: {
    fontSize: '2rem'
  },
  subtitle: {
    fontSize: '1.5rem'
  }
})

export default (props) => {
  const classes = useStyles(props);

  return (
    <Box className={classes.root}>
      <Typography variant='overline' className={classes.title}>{props.title}</Typography>
      <Typography variant='subtitle2' className={classes.subtitle}>{props.subtitle}</Typography>
      <Typography variant='body1'>{props.info}</Typography>
    </Box>
  )
}