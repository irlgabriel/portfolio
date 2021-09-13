import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useInView } from 'react-intersection-observer';
import { CSSTransition } from 'react-transition-group';
import CurvedArrow from './utils/CurvedArrow';
import Typography from '@material-ui/core/Typography';
import InfoSection from './utils/InfoSection';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.background.default,
    position: 'relative',
    width: '100%',
  },
  title: {
    textAlign: 'center',
    marginBottom: '2.5rem',
    fontFamily: 'Truculenta',
  },
  content: {
    position: 'absolute'
  }
}))

const NUMBER_ARROWS = 5;

export default ({theme}) => {
  const classes = useStyles();

  const [animated, setAnimated] = useState(false);

  const { inView, ref } = useInView({
    threshold: .25
  });

  useEffect(() => {
    setAnimated(false);
  }, [theme])

  useEffect(() => {
    if(inView) setAnimated(true);
  }, [inView])

  return (
    <CSSTransition
      in={animated}
      classNames='slide-up'
      timeout={1000}
      exit={false}
    >
      {/** Note: count should actually be count + 1 but I don't want to redo the dependent
       * code to accomodate this change.
       */}
      <Box ref={ref} className={`${classes.root} slide-up`} style={{minHeight: '600px'}}>
        <Typography variant='h2' className={classes.title}>Career Path</Typography>
        <Box>
          <CurvedArrow count={NUMBER_ARROWS} order={0} color='purple' direction='left'/>
          <InfoSection color='purple' left order={0} count={NUMBER_ARROWS} title={'May 2020'} subtitle={'Ruby on Rails'} info='Started learning ruby on rails after reading lots of articles on "what is the best programming language to learn as a beginner". Unfortunately I did not read enough of "Limbaje programare populare în Romania @ junior level." as I later found out - not too late tough.' />          
        </Box>
        <Box>
          <CurvedArrow count={NUMBER_ARROWS} order={1} color='#E6C15E' direction='right'/>
          <InfoSection color='#E6C15E' right order={1} count={NUMBER_ARROWS} title={'August 2020'} subtitle={'React'} info='Had heard a lot about this thing called react - I only knew it was a frontend framework and a very popular one at that. I love it and I find it very intuitive to learn and enjoyable to build things with. It helps that it is arguably the most popular frontend framework too.' />
        </Box>
        <Box>
          <CurvedArrow count={NUMBER_ARROWS} order={2} color='lightblue' direction='left'/>
          <InfoSection color='lightblue' left order={2} count={NUMBER_ARROWS} title={'September 2020'} subtitle={'Firebase and other SaaS'} info="Started playing with google's firebase toolset - firestore, authentication and hosting - to build simple apps that would further my knowledge with react." />          
        </Box>
        <Box>
          <CurvedArrow count={NUMBER_ARROWS} order={3} color='orange' direction='right'/>
          <InfoSection color='orange' right order={3} count={NUMBER_ARROWS} title={'November 2020'} subtitle={'Node and Express'} info='Finally delved into backend stuff for real this time. I was not gonna count ruby on rails - although I was able to build some nice stuff with it, the whole thing with route helpers, form helpers, activestorage and such was quite confusing to me back then. After getting familiar and building things with express I now grew to appreciate the things rails does under the hood.' />          
        </Box>
        <Box>
          <CurvedArrow count={NUMBER_ARROWS} order={4} color='green' direction='left'/>
          <InfoSection color='green' left order={4} count={NUMBER_ARROWS} title={'May 2021'} subtitle={'Getting Hired @ LinkedIn'} info="Literally building this 'career path' section right now to make the portfolio more appealing, along with applying to new jobs on LinkedIn on a daily basis." />          
        </Box>
        <Box>
          <CurvedArrow count={NUMBER_ARROWS} order={5} color='#2a6cf0' direction='right'/>
          <InfoSection color='#2a6cf0' right order={5} count={NUMBER_ARROWS} title={'June 2021'} subtitle={'Started working with Sensidev!'} info="Yaay! Got hired by Sensidev to work on a project that no doubt everyone will hear about soon." />          
        </Box>
      </Box>
    </CSSTransition>
  )
}