// eslint-disable-next-line
import React from 'react';
// eslint-disable-next-line
import ReactDOM from 'react-dom';
// eslint-disable-next-line
import App from './App';
// eslint-disable-next-line
import { ThemeProvider } from './Context';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
