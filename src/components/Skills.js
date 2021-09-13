import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { altSkills }from '../data/Data';
import { TransitionGroup } from 'react-transition-group';
import { makeStyles } from '@material-ui/core/styles';
import { useInView } from 'react-intersection-observer';
import { SkillSection } from '../components';

const useStyles = makeStyles( theme => ({
  root: {
    
  },
  rows: {
    flexDirection: 'column',
    flexWrap: 'nowrap'
  },
  title: {
    textAlign: 'center',  
    fontFamily: 'Truculenta',
  },
  skillsection: {
    flexDirection: 'column',
  },
  subtitle: {
    padding: '1rem',
    fontFamily: 'Truculenta',
  },
  '&:hover': {
    transform: 'scale(1.2)',
  },
  section: {
    background: theme.palette.primary.main
  }
}))

export default ({theme}) => {
  const classes = useStyles();

  const { ref, inView } = useInView({
    threshold: 0.2
  })

  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if(inView === true) setEntered(true);
  }, [inView])

  useEffect(() => {
    setEntered(false)
  }, [theme])

  return (

      <Grid  id='skills' className={`${classes.root}`} container>
        <TransitionGroup component={null}>
          <Grid className={`${classes.rows}`} container>
            {/*
            <Grid item>
              <Typography component='h2' className={classes.title} variant='h3'>Work Stack</Typography>
            </Grid>
            <Typography variant='h3' component='h3' className={classes.subtitle}>Languages & Frameworks</Typography>
            */}
              <Grid ref={ref} className={classes.skillsection} item container>
              {
                altSkills.map((skill) => 
                  <SkillSection key={skill.title} theme={theme} {...skill}/>
                )
              }
              </Grid>
          </Grid>
        </TransitionGroup>
    </Grid>
  )
}