import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useInView } from 'react-intersection-observer';
import { CSSTransition } from 'react-transition-group';
import CurvedArrow from './utils/CurvedArrow';
import InfoSection from './utils/InfoSection';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.background.default,
    position: 'relative',
    width: '100%',
  },
  content: {
    position: 'absolute'
  }
}))

export default () => {
  const classes = useStyles();

  const { inView, ref } = useInView({
    threshold: .2
  });

  return (
    <CSSTransition
      in={inView}
      classNames='slide-up'
      timeout={1000}
      exit={false}
    >
      <Box ref={ref} className={classes.root} style={{minHeight: '600px'}}>
        <Box>
          <CurvedArrow count={3} order={0} color='purple' direction='left'/>
          <InfoSection left order={0} count={3} title={'May 2020'} info='asd' />          
        </Box>
        <Box>
          <CurvedArrow count={3} order={1} color='yellow' direction='right'/>
          <InfoSection right order={1} count={3} title={'May 2020'} info='asd' />
        </Box>
        <Box>
          <CurvedArrow count={3} order={2} color='lightblue' direction='left'/>
          <InfoSection left order={2} count={3} title={'May 2020'} info='asd' />          
        </Box>
        <Box>
          <CurvedArrow count={3} order={3} color='orange' direction='right'/>
          <InfoSection right order={3} count={3} title={'May 2020'} info='asd' />          
        </Box>
        
      </Box>
    </CSSTransition>
  )
}