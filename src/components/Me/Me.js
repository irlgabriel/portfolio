import React from "react";
import me from '../../images/me.jpeg';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Navbar } from '../';
import { makeStyles } from '@material-ui/core/styles';
import { GoLocation } from "react-icons/go";

const useStyles = makeStyles({
  alignCenter: {
    alignItems: 'center'
  },
  borderRadius: {
    borderRadius: '6px',
  }
})

export default () => {
  const classes = useStyles();

  return (
    <Box container>
      <Navbar />
      <Grid direction='row' component={Box} p={2} container>
        <Grid xs={6} item>
          <Typography variant='h2'>Gabriel, 21</Typography>
          <Grid className={classes.alignCenter} container>
            <GoLocation/>
            <Typography variant='h5'>Brasov/Braila, Romania</Typography>
          </Grid>
          <Typography variant='subtitle1' style={{marginLeft: "1rem", marginTop: ".5rem"}}>I am a young aspiring front end web developer from Romania. I have worked with ruby on rails in the past and spent considerable amount of time developing a facebook clone with it. Lately I got into React and and I have developed a couple of apps with it. Right now I am working on a reddit clone with the popular MERN stack. When I am not learning and practicing web development I am probably working out or reading. </Typography>
        </Grid>
        {/** Image */}
        <Grid xs={6} item>
          <img className={classes.borderRadius} width='100%' src={me}/>
        </Grid>
      </Grid>
    </Box>
  );
};
