import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { MdWork } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { projects } from '../data/Data';

import { Project } from '../components';

const useStyles = makeStyles(theme => ({
  root: {
    /*
    '&::before': {
      background: theme.palette.background.default,
      padding: '-1rem',
      transform: 'skew(0,15deg)',
      content: '""',
      width: '100%',
      display: 'inline-block',
      height: '40px',
      
    },
    */
    background: theme.palette.primary.main,
    padding: '1rem',
    '& .MuiTypography-overline': {
      fontSize: '2rem',
      lineHeight: '1.5'
    },
    '& .MuiTypography-h3': {
      margin: '1rem 0'
    }
  },
  title: {
    '& h3': {
      fontFamily: 'Truculenta',
    },
    display: 'flex',
    justifyContent: 'center',
    width: '70%',
    margin: '0 auto'
  },
  link: {
    textDecoration: 'none',
    margin: '0 auto'
  },
  row: {
    alignItems: 'center',
    flexWrap: 'nowrap',
  },

}))


export default ({theme}) => {
  const classes = useStyles();

  return (
    <Grid id="projects" className={classes.root} container>
      <Box className={classes.title}>
        <Grid className={classes.row} container>
          <MdWork size='2rem' color='brown'/>&nbsp;
          <Typography style={{flex: 1}} variant='h3'>Featured Projects</Typography>
        </Grid>
        <Divider />
      </Box>
      {
        projects.map((project, idx) =>
          project.featured && 
          <Project altBackground={idx % 2 === 0 ? true : false} key={project.idx} theme={theme} {...project}/>
        )
      }
        <Link className={`${classes.link}`}  to='/projects'>
          <Button variant='contained' color='secondary' size='large'>See all projects</Button>
        </Link>
    </Grid>
  )
}