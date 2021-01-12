import { createMuiTheme } from '@material-ui/core/styles';

export const themeLight = createMuiTheme({
  palette: {
    primary: {
      main: '#5c6bc0',
    },
    secondary: {
      main: '#ff1744',
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
      main: '#5c6bc0',
    },
    secondary: {
      main: '#ff1744',
    },
    type: 'dark',
  }
  
})

