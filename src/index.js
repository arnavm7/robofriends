import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';
//import Card from './Card';
// import CardList from './CardList';
import reportWebVitals from './reportWebVitals';
import 'tachyons'; //package that we downloaded, contains extra styling components
// import { robots } from './robots'; //because we did not use "export default in robots.js, we must use destructuring with {}"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
