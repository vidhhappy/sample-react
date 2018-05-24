import React from 'react';
import ReactDOM,{ hydrate, render } from 'react-dom';
import './index.css';
import App from './App';
import './App.css';



//const rootElement = document.getElementById('root');
//if (rootElement.hasChildNodes()) {
  //hydrate(<App />, rootElement);
//} else {
  //render(<App />, rootElement);
//}

ReactDOM.render(<App />, document.getElementById('root'));
