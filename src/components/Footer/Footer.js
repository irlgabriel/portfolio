import React from "react";
import { contacts } from "./Data";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { SiMaterialUi } from 'react-icons/si';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    background: theme.palette.primary.main
  },
  footerContainer: {
    flexWrap: 'nowrap',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      '& a': {
        flex: '30%',
        display: 'inline-flex',
        alignItems: 'center',
      }
    },
  },
  listItem: {
    width: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: "2rem",
    background: "transparent",
    transition: 'all .25s ease-in-out',
    '&:hover': {
      transform: 'scale(1.2)'
    }
  },
  listItemIcon : {
    transition: 'all 0.20s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    }
  },
  listItemText: {
    '& span': {
      fontSize: '1.3rem',
      display: 'inline-block'
    },
  },
  note: {
    textDecoration: 'none',

    display: 'inline-flex',
    alignItems: 'center',
    transition: 'all .25s ease-in-out',
    color: theme.palette.text.primary,
    '&:hover': {
      transform: 'scale(1.2)'
    }
  }
}));


export default function Footer() {
  const classes = useStyles({});

  return (
    <Box p={2} className={classes.root}>
      <Typography component='a' href='https://material-ui.com/' className={classes.note} variant='subtitle2'>
        Built with&nbsp;
        <SiMaterialUi size={24} />
      </Typography>
      <Grid spacing={0} className={classes.footerContainer} item container component={List}>
        {contacts.map((obj, index) => (
          <ListItem
            className={classes.listItem}
            key={index}
            component="a"
            style={{color: obj.color}}
            href={obj.contactLink}
            action
          >
            {obj.icon}
            <span className={classes.listItemText}>{obj.name}</span>
          </ListItem>
        ))}
      </Grid>
    </Box>
  );
}
