import React from "react";
import Appbar from '@material-ui/core/Appbar';
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  headerText: {
    flexGrow: 1,
  },
  button: {
    marginRight: theme.spacing(2),
  }
}));

export default function AppNavbar() {
  const classes = useStyles();

  const handleOnChange = () => {

  }

  return (
    <div className={classes.root}>
      <Appbar position='static' >
        <Toolbar>
          <Box className={classes.root}>
            <Button
              color='primary'
              variant='contained'
              startIcon={<AssignmentIndIcon />}
            >irlgabriel's portfolio</Button>
          </Box>
          <Box>
            <FormControlLabel
              control={
                <Switch 
                onChange={() => handleOnChange()}
                />
              }
              label='Dark mode'
            />
          </Box>
        </Toolbar>
      </Appbar>
    </div>
  );
}
