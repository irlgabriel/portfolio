import React from "react";
import me from '../../images/me.jpeg';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import { GoLocation } from "react-icons/go";
import { Link, useLocation } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
  },
  alignCenter: {
    alignItems: 'center'
  },
  borderRadius: {
    borderRadius: '6px',
  },
  link: {
    color: theme.palette.primary.light,
    textDecoration: 'none',
    marginLeft: '.25rem',
    '&:hover': {
      color: theme.palette.primary.dark,
    }
  },
  rootLink: {
    position: 'absolute',
    top: '-2.5rem',
    left: '0',
    transition: 'all .3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.3)',
    }
  }
}))

export default ({props}) => {
  const location = useLocation();

  const classes = useStyles();

  return (
      <Grid className={classes.root} spacing={0} direction='row' p={2} container>
         {/* Absolutely positioned back button */}
        <Link className={classes.rootLink} to='/'>
          <Typography variant='h5'>
            <ArrowBackIcon fontSize='large' />
          </Typography>
        </Link>
        <Grid xs={6} item>
          <Box p={1}>
          <Typography variant='h3'>Gabriel, 21</Typography>
          <Grid className={classes.alignCenter} container>
            <GoLocation/>
            <Typography variant='h5'>Brasov/Braila, Romania</Typography>
          </Grid>
          <Typography variant='subtitle1' style={{marginLeft: "1rem", marginTop: ".5rem"}}>
            I am a young aspiring front end web developer from Romania. 
            I have worked with ruby on rails in the past and spent considerable amount of time developing a facebook clone with it. 
            Lately I got into React and and I have developed a couple of apps with it - most notable 
            <a className={classes.link} href='https://irlgabriel.github.io/covid-19-tracker'>This</a> - a small app that implements two public APIs and shows relevant covid-19 related stats from your country and around the world, in quite a nice - if not useful - way, and 
            <a className={classes.link} href='https://fcloneodin.herokuapp.com'>This</a> - an improved facbook clone built with the MERN stack. Not quite as useful (if at all) but it helped me get used to the stack and also spent considerable amount of time learning authentication best-practices and security concerns while building it. 
            Right now I am working on a reddit clone with the popular MERN stack. When I am not learning and practicing web development I am probably working out or reading. </Typography>
          </Box>
        </Grid>
        {/** Image */}
        <Grid xs={6} item>
          <img alt='me' className={classes.borderRadius} width='60%' src={me}/>
        </Grid>
      </Grid>
  );
};
