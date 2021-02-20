import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { contactLinks } from '../data/Data';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    padding: '1rem',
    flexDirection: 'column'
  },
  linksContainer: {
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: 'Truculenta',
    textAlign: 'center',
  }
})

export default () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container>
      <Divider />
      <Grid item>
        <Typography className={classes.title} component='h1' variant='h3'>Contact</Typography>
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