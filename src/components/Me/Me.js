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

  link: {
    color: theme.palette.text.hint,
    textDecoration: 'none',
    marginLeft: '.25rem',
    '&:hover': {
      transform: 'translateX(0)',
      color: theme.palette.primary.dark,
    }
  },
  rootLink: {
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    zIndex: '503',
    transition: 'all .3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.3)',
    }
  },
  img: {
    float: 'right',
    borderRadius: '6px',
  },
  desc: {
    padding: '.5rem',
  }
}))

export default ({props}) => {

  const classes = useStyles();

  return (
      <Box className={classes.root} spacing={0} direction='row' p={2} container>
         {/* Absolutely positioned back button */}
        <Link className={classes.rootLink} to='/'>
          <Typography variant='h5'>
            <ArrowBackIcon fontSize='large' />
          </Typography>
        </Link>
        <Box p={2}>
          <Typography variant='h3'>Gabriel, 21</Typography>
          <Grid className={classes.alignCenter} container>
            <GoLocation/>
            <Typography variant='h5'>Brasov/Braila, Romania</Typography>
          </Grid>
          <Typography className={classes.desc} variant='subtitle1' style={{marginLeft: "1rem", marginTop: ".5rem"}}>
          <img alt='me' className={classes.img} width='50%' src={me}/>
            I am a young aspiring web developer from Romania. 
            Started taking an interest in web development roughly 2-3 years ago with basic HTML and CSS but quicky lost motivation to further my knowledge. 
            Afterwards I got more seriously into it and fell in love with ruby on rails really quickly then 
            fell out of love just as quick after I've found that there's hardly any rails jobs in Romania - that was quite a disappointment as I thought it would put me behind on my 
            goal to get hired as a web developer, but lately as I've got familiar with node and express I started to realize that the rails knowledge came in really handy, and it only made me
            truly appreciate the work that rails gems do to offload a lot of boring (and sometimes complicated) tasks like devise for authentication, active record for database associations, 
            active storage for image uploading and more that I do not recall right now and I am sure there's plenty others useful ones that I didn't have the chance to work with in my very brief journey with rails.
            Lately I got into React and and I have since developed a couple random apps to get better at it. These I consider the most satisfying projects that I developed with React: 
            <a className={classes.link} href='https://irlgabriel.github.io/covid-19-tracker'>this</a> - a small app that implements some (unreliable but free) public APIs and shows relevant covid-19 related stats from your country 
            and around the world, in quite an aesthetically pleasing - if not useful - way, and 
            <a className={classes.link} href='https://fcloneodin.herokuapp.com'>this</a> - an improved facebook clone built with the MERN stack. Not so much satisfying because 
            of its usefulness - of course it doesn't serve any purpose other than showcase my skills with the stack. I would estimate it took me about 150+ hours to build it 
            but I learned a lot of things such as: different kind of authentication flows and their pros and cons, security concerns for small to medium apps. I got introduced to different node libraries for things 
            like image uploading (multer + AWS S3), authentication (passport, jsonwebtoken), env variables (dotenv). That's just what I recall off the top of my head, what I want to say is that I learned a lot of
            things and I wish I had a more useful app to show for it.
            Right now I am only working on getting hired, I hardly have any ideas for more projects to showcase my skills - for now anyway. 
            When I am not learning and practicing web development I am probably working out or reading. 
          </Typography>
        </Box>
      </Box>
  );
};
