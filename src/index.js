import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './styles.scss';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const themeLight = createMuiTheme({
  palette: {
    primary: {
      main: '#5c6bc0',
    },
    secondary: {
      main: '#ffab00',
    },
  },
});

const themeDark = createMuiTheme({
  palette: {
    background: {
      default: 'black'
    },
    text: {
      primary: '#fff'
    }
  },
})

ReactDOM.render(

  <ThemeProvider theme={themeLight} >
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
