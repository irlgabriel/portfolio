import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Divider from '@material-ui/core/Divider';

import { useLocation, useHistory, Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Switch as MaterialSwitch } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';

const useStyles = makeStyles(theme => ({
  root: {
    //background: theme.palette.background.paper,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '1rem',
  },
  switch: {
    display: 'inline-flex',
    alignItems: 'center',
  },
  navLinks: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: '1',
    '& a': {
      cursor: 'pointer',
      color: theme.palette.text.primary,
      textDecoration: 'none',
      transition: 'all .15s ease-in-out',
      '&:hover': {
        color: theme.palette.text.secondary,
      }
    },
    '& h5': {
      // <960px
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
      flex: '1',
    }
  },
  menu: {
    [theme.breakpoints.down('sm')]: {
      display: 'inline-flex',
    },
    display: 'none',
    cursor: 'pointer',
    transition: 'transform .15s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)'
    }
  },
  me: {
    flex: '2',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    margin: '0',
    padding: '0',
    lineHeight: '1',
    '& a': {
      color: theme.palette.secondary.main
    }
  },
  divider: {
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    },
    display: 'none',
    position: 'absolute',
    bottom: '16px',
    left: '16px',
    right: '16px',
  },
  menuOverlay: { 
    zIndex: '51',
    position: 'absolute',
    top: '95px',
    left: '0px',
    right: '0px',
    bottom: '0px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    background: theme.palette.background.default,
    '& div > h5': {
      display: 'flex',
      justifyContent: 'center'
    },
    '& div > h5 > a': {
      fontSize: '1.5rem',
      color: theme.palette.text.primary,
      textDecoration: 'none',
      transition: 'all .15s ease-in-out',
      '&:hover': {
        color: theme.palette.text.secondary,
      }
    }
  },
  link: {
    fontSize: '1rem',
    '&:hover': {
      color: theme.palette.text.secondary,
      cursor: 'pointer',
    }
  }
  
}))

export default ({aboutMe, projects, skills, contact, theme, setTheme}) => {
  const classes = useStyles();

  const location = useLocation();
  const history = useHistory();

  const [showMenu, setMenu] = useState(false);

  const handleOnChange = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }

  const onIntroPage = () => {
    location.pathname === '/' ? console.log('on intro page') : console.log('on projects page')
    return location.pathname === '/';
  }

  const checkSize = () => {
    if (window.innerWidth > 960) setMenu(false);
  }

  // dismount menuOverlay when window is resized >960px
  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  })

  useEffect(() => {
    showMenu 
    ? document.body.style.overflow = 'hidden'
    : document.body.style.overflow = 'unset';
  }, [showMenu])

  useEffect(() => {
    console.log(location.pathname)
  })

  return (
    <Box className={classes.wrapper}>
      <Grid container className={classes.root}> 
        {/** Switch */}
        <Grid item>
          <FormControlLabel
            control={
              <MaterialSwitch 
              color='secondary'
              checked={theme === 'dark'}
              onChange={() => handleOnChange()}
              />
            }
            className={classes.switch}
            label={
              <Box
                className={classes.switch}
              >
                <NightsStayIcon fontSize='large' />
              </Box>
            }
          />
        </Grid>
        {/** Links */}
        <Grid item className={classes.navLinks}>
          <Typography className={classes.me} variant='subtitle' component='h4'>
            <Link to='/'>irlgabriel</Link>
          </Typography>

          {/** >960px Links */}
          <Typography className={classes.link} onClick={() => onIntroPage() ? aboutMe.current.scrollIntoView({behavior: 'smooth'}) : history.push('/')} variant='overline' component='h5'>
            About me
          </Typography>
          <Typography className={classes.link} onClick={() => onIntroPage() ? projects.current.scrollIntoView({behavior: 'smooth'}) : history.push('/')} variant='overline' component='h5'>
            Projects
          </Typography>
          {
          /*
          <Typography className={classes.link} onClick={() => onIntroPage() ? skills.current.scrollIntoView({behavior: 'smooth'}) : history.push('/')} variant='overline' component='h5'>
            Skills
          </Typography>
          */
          }
          <Typography className={classes.link} onClick={() => onIntroPage() ? contact.current.scrollIntoView({behavior: 'smooth'}) : history.push('/')} variant='overline' component='h5'>
            Contact
          </Typography>
        </Grid>

        
        {/* <960px Mobile Menu Button */}
        <Grid onClick={() => setMenu(prev => !prev)} item className={classes.menu}>
          <TransitionGroup component={null}>
            <CSSTransition
              timeout={500}
              classNames='fade'
            >
              {!showMenu ? <GiHamburgerMenu size={32}/> : <ImCross size={32}/> }
            </CSSTransition>
            
          </TransitionGroup>
        </Grid>
        
        {/* Mobile Menu Overlay */}
        <CSSTransition
          in={showMenu}
          classNames='fade2'
          timeout={750}
          unmountOnExit
        >
          <Grid container className={classes.menuOverlay}>
            <Grid item>
              <Typography className={classes.link} onClick={() => {setMenu(false); onIntroPage() ? aboutMe.current.scrollIntoView({behavior: 'smooth'}) : history.push('/')} } variant='overline' component='h5'>
                About Me
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.link} onClick={() => {setMenu(false); onIntroPage() ? projects.current.scrollIntoView({behavior: 'smooth'}) : history.push('/')} } variant='overline' component='h5'>
                Projects
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.link} onClick={() => {setMenu(false); onIntroPage() ? skills.current.scrollIntoView({behavior: 'smooth'}) : history.push('/')} } variant='overline' component='h5'>
                Skills
              </Typography>
            </Grid>
            
            <Grid item>
              <Typography className={classes.link} onClick={() => {setMenu(false); onIntroPage() ? contact.current.scrollIntoView({behavior: 'smooth'}) : history.push('/')} } variant='overline' component='h5'>
                Contact
              </Typography>
            </Grid>
          </Grid>
        </CSSTransition>
      </Grid>
      <Divider />
    </Box>
  )
}