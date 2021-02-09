import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import  App from './App';
//const h1element = React.createElement('h1', {className: 'title'},'hello world');



// everything in React is JavaScript!
ReactDOM.render(
  <React.StrictMode>
     {/*<h1>Hello world</h1> from h1 you can write it in react or this way*/}
    { /* React.createElement('h1', {className: 'title'}, 'hello world')*/}
    { /*<div class='container'>
      <h1 class='title'>Hello world</h1>
    </div> we can write it like this or react version1*/}
    {/*React.createElement('div', {className: 'container'}, React.createElement('h1', {className: 'title'},'hello world'))*/}
    {/*react version2 React.createElement('div', {className: 'container'}, h1element) */}
    <App/>

  </React.StrictMode>,
  document.getElementById('root')
);

// if you want your app to work offline and load faster
// then change from unregister(); to register();
serviceWorker.unregister();

