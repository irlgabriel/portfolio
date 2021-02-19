import React from 'react';
import { contactLinks } from '../Footer/Data';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    alignItems: 'center',
    height: '100%',
  },
  link: {
    marginBottom: '.5rem',
    transition: 'all .25s ease-in-out',
    '&:hover': {
      transform: 'scale(1.2)'
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
  '& a[href="/"]': {
    '&:hover': {
      transform: 'scale(1.5)',
    }
  },
  flexContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
})

export default () => {
  const classes = useStyles();

  return (
    <Box p={3}>
      <Link className={classes.rootLink} to='/'>
        <Typography variant='h5'>
          <ArrowBackIcon fontSize='large'/>
        </Typography>
      </Link>

      <Grid container className={classes.flexContainer}>
        {
          contactLinks.map(link => (
            <a key={link.name} className={classes.link} href={link.contactLink}>
              <Grid container className={classes.root}>
                {link.icon}&nbsp;&nbsp;
                <Typography variant='h4'>{link.name}</Typography>
              </Grid>
            </a>
          ))
        }
      </Grid>
    </Box>
  )
}