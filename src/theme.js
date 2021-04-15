import { createMuiTheme } from '@material-ui/core/styles';

export const themeLight = createMuiTheme({
  palette: {
    primary: {
      main: '#F2D6BD',
    },
    secondary: {
      main: '#F53D38',
    },
    background: {
      paper: '#DBDAD7'
    }
  },
});

export const themeDark = createMuiTheme({
  palette: {
    primary: {
      main: '#51497A',
    },
    secondary: {
      main: '#18688F',
    },
    type: 'dark',
  }
  
})

