import { createMuiTheme } from '@material-ui/core/styles';

export const themeLight = createMuiTheme({
  palette: {
    primary: {
      main: '#DB9D30',
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
      main: '#561DB3',
    },
    type: 'dark',
  }
  
})

