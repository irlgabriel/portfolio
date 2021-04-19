import { createMuiTheme } from '@material-ui/core/styles';

export const themeLight = createMuiTheme({
  palette: {
    primary: {
      main: '#8EC6E6',
    },
    secondary: {
      main: '#E6A1A5',
    },
    background: {
      paper: '#e9e9e9'
    }
  },
});

export const themeDark = createMuiTheme({
  palette: {
    primary: {
      main: '#687399',
    },
    secondary: {
      main: '#E6DF85',
    },
    type: 'dark',
  }
  
})

