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

