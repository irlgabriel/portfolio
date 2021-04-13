import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { contactLinks } from '../data/Data';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.background.paper,
    padding: '1rem',
    paddingTop: '0',
    paddingBottom: '2rem',
    flexDirection: 'column'
  },
  linksContainer: {
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: 'Truculenta',
    textAlign: 'center',
    marginBottom: '1rem'
  },
  divider: {
    margin: '1rem 0',
    marginTop: '0',
  }
}))

export default () => {
  const classes = useStyles();


  return (
    <Grid className={`${classes.root}`} container>
      <Divider className={classes.divider}/>
      <Grid item>
        {
          /*
          <Typography className={classes.title} component='h1' variant='h3'>Contact</Typography>
          */
        }
      </Grid>
      <Grid className={classes.linksContainer} id='contact' container>
      {
        contactLinks.map(contact =>
          <a key={contact.name} href={contact.contactLink}>
            {contact.icon}
          </a>
        )
      }
      </Grid>
    </Grid>
  )
}