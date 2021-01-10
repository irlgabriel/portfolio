import React from "react";
import { contacts } from "./Data";
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
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
    fontSize: "2rem",
    background: "transparent",
    
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
  primaryBg: {
    background: theme.palette.primary.main
  }
}));


export default function Footer() {
  const classes = useStyles({});

  return (
    <div>
      <Divider />
      <Grid spacing={0} className={`${classes.noWrap} ${classes.columnSm} ${classes.primaryBg}`} item container component={List}>
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
    </div>
  );
}
