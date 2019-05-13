import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

ReactDOM.render(
  <App />,        //  <App /> is our root React component
  document.getElementById('root')
);

/*
`index.js` purpose is to take the root component <App /> which represents our React app,
and inject it into the DOM ->  `index.html`  <div id="root"></div> ;
*/
