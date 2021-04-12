import React, {useRef, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { Header, Intro, Projects, Skills, Contact, About, TimeTable } from '../Components';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexDirection: 'column',
    transition: 'color .25s ease-in-out, background .25s ease-in-out'
  },
}))

export default ({theme, setTheme}) => {

  const intro = useRef(null);
  const aboutMe = useRef(null);
  const projects = useRef(null);
  const skills = useRef(null);
  const contact = useRef(null);

  useEffect(() => {
    console.log(intro, aboutMe)
  }, [intro, aboutMe])

  const classes = useStyles();

  return (
    <Grid className={classes.root} spacing={0} container>
      <Grid item>
        <Header projects={projects} skills={skills} contact={contact} intro={intro} aboutMe={aboutMe} theme={theme} setTheme={setTheme}/>
      </Grid>
      <Grid ref={intro} item>
        <Intro />
      </Grid>      
      <Grid ref={aboutMe} item>
        <About theme={theme} />
      </Grid>
      <Grid>
        <TimeTable />
      </Grid>
      <Grid ref={projects} item>
        <Projects theme={theme} />
      </Grid>
      <Grid ref={skills} item>
        <Skills theme={theme}/>
      </Grid>
      <Grid ref={contact} item>
        <Contact />
      </Grid>
    </Grid>
  )
}