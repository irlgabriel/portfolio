import React from "react";
import me from '../../images/me.jpeg';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import mui from '../../images/mui.svg';
import { FaReact } from 'react-icons/fa';
import { MdWork, MdContacts } from 'react-icons/md';
import { BsFillInfoSquareFill } from 'react-icons/bs';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
  desc: {
    position: "absolute",
    top: '1rem',
    left: '1rem',
  },
  align: {
    display: 'flex',
    alignItems: 'center',
  },
  flexContainer: {
    height: '100%',
    /*
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    }
    */
  },
  flexItem: {
    flexBasis: '50%'
  },
  toRight: {
    height: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    /*
    [theme.breakpoints.down('xs')]: {
      order: '1'
    }
    */
  },
  leftDiv: {
    height: '100%',
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'center',
    /*
    [theme.breakpoints.down('xs')]: {
      order: '2'
    }
    */
  },
  img: {
    borderRadius: '8px',
    boxShadow: theme.shadows[5],
  }

}))

export default () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container>

      {/**Absolutely positioned */}
      <Box className={classes.desc} p={1}>
        <Box className={classes.align}>
          <Typography variant='subtitle2'>
            Built with&nbsp;
          </Typography>
          <img src={mui} width='32px'/>
          &nbsp;+&nbsp;
          <FaReact fill='royalblue' size={32}/>
        </Box>
      </Box>

      <Grid className={classes.flexContainer} container>
        <Grid className={`${classes.flexItem} ${classes.leftDiv}`} item>
          <Link className={classes.link} to='/what'>
            <Typography variant='h3'>
            <MdWork color='#d2691e' size={32}/>&nbsp;
              Work</Typography>
          </Link>
          <Link className={classes.link} to='who'>
            <Typography variant='h3'>
            <BsFillInfoSquareFill color='lightskyblue' size={32}/>&nbsp;
            About</Typography>
          </Link>
          <Link className={classes.link} to='contact'>
            
            <Typography variant='h3'>
            <MdContacts color='orange' size={32}/>&nbsp;
            Contact</Typography>
          </Link>
        </Grid>
        
      </Grid>
  </Grid>
  )
};
