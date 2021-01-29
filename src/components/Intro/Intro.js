import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import mui from '../../images/mui.svg';
import { FaReact } from 'react-icons/fa';

const useStyles = makeStyles({
  link: {
    transition: 'transform .3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.5)'
    }
  },
  desc: {
    position: "absolute",
    top: '1rem',
    left: '1rem',
  },
  align: {
    display: 'flex',
    alignItems: 'center',
  }

})

export default () => {
  const classes = useStyles();

  return (
    <Grid>
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

      <Link className={classes.link} to='/what'>
        <Typography variant='h3'>Work</Typography>
      </Link>
      <Link className={classes.link} to='who'>
        <Typography variant='h3'>About</Typography>
      </Link>
      <Link className={classes.link} to='contact'>
        <Typography variant='h3'>Contact</Typography>
      </Link>
  </Grid>
  )
};
