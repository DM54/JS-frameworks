import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// everything in React is JavaScript!
ReactDOM.render(
  <React.StrictMode>
     <h1>Hello world</h1>
  </React.StrictMode>,
  document.getElementById('root')
);

// if you want your app to work offline and load faster
// then change from unregister(); to register();
serviceWorker.register();

