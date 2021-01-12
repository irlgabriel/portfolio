import { createMuiTheme } from '@material-ui/core/styles';

export const themeLight = createMuiTheme({
  palette: {
    primary: {
      main: '#564256',
    },
    secondary: {
      main: '#629677',
    },
  },
});

export const themeDark = createMuiTheme({
  /*
  palette: {
    primary: {
      main: '#5c6bc0',
    },
    secondary: {
      main: '#00897b',
    },
    background: {
      default: '#303030',
      paper: '#424242',
    },
    text: {
      primary: '#fff'
    }
  },
  */
  palette: {
    primary: {
      main: '#1d2d50',
    },
    secondary: {
      main: '#fcdab7',
    },
    type: 'dark',
  }
  
})

