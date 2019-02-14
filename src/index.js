import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type:'dark',
    primary:{
      main: '#05668d'
    },
    secondary: {
      main:'#a5be00'
    },
  },
  typography: {
    useNextVariants: true,
  },
})
function MyApp(){
    return (
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    )
}

ReactDOM.render(<MyApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
