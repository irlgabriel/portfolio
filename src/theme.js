import { createMuiTheme } from '@material-ui/core/styles';

export const themeLight = createMuiTheme({
  palette: {
    primary: {
      main: '#F2D6BD',
    },
    secondary: {
      main: '#F53D38',
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

