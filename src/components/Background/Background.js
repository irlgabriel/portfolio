import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  light: {
    background: 'linear-gradient(102.36deg, rgba(110, 198, 250, 0.8) 0.34%, rgba(143, 215, 250, 0.3) 100%)',
    position: 'fixed',
    inset: '0',
    zIndex: '-55252'
  },
  dark: {
    background: 'linear-gradient(296.51deg, #838184 0%, rgba(56, 29, 73, 0.65) 100%)',
    position: 'fixed',
    inset: '0',
    zIndex: '-55252'
  }
})

export default ({theme}) => {
  const classes = useStyles();

  return (
    <Box className={`${theme === 'light' ? classes.light : classes.dark}`} />
  )
}