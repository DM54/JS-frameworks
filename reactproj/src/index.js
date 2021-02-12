import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker1 from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import  App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  document.getElementById('root')
);

// if you want your app to work offline and load faster
// then change from unregister(); to register();
serviceWorker1.unregister();

