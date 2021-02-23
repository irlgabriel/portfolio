import { createMuiTheme } from '@material-ui/core/styles';

export const themeLight = createMuiTheme({
  palette: {
    primary: {
      main: '#2EE0C7',
    },
    secondary: {
      main: '#8EF5B5',
    },
  },
});

export const themeDark = createMuiTheme({
  palette: {
    primary: {
      main: '#1d2d50',
    },
    secondary: {
      main: '#FFB37A',
    },
    type: 'dark',
  }
  
})

