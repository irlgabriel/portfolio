import React from "react";
import { contacts } from "./Data";

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  noWrap: {
    flexWrap: 'nowrap',
  },
  columnSm: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',

    },
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: "3rem",
    background: "transparent",
    margin: '0 10px',
    transition: 'all 0.20s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    }
  },

}));


export default function Footer() {
  const classes = useStyles({});

  return (
    <Grid spacing={0} container>
      <Grid spacing={0} className={`${classes.noWrap} ${classes.columnSm}`} item container component={List}>
        {contacts.map((obj, index) => (
          <ListItem
            className={classes.listItem}
            key={index}
            component="a"
            style={{color: obj.color}}
            href={obj.contactLink}
            action
          >
            <ListItemIcon style={{color: obj.color}} >{obj.icon}</ListItemIcon>
            <ListItemText primary={obj.name} component='span' ></ListItemText>
          </ListItem>
        ))}
      </Grid>
    </Grid>
  );
}
