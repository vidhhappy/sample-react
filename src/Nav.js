import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';  

export default class Nav extends React.Component {
  render() {    
    return (
     

      <nav className="col-sm-2 col-md-2 hidden-xs-down bg-faded sidebar">
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <a className="nav-link " href="/">Overview
            <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="research">Research</a>
        </li>
       
      </ul>

</nav>
    );
  }
}