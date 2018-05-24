import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Research from './Research';
import Nav from './Nav';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
<div className="App">
      <header className="App-header">
        <Link to="/">
          <img src="/logo.svg" className="App-logo" alt="logo" />
        </Link>
        <h1 className="App-title">Sample Application- SkandLAB</h1>
       
      </header>
    
    
    <div className="container-fluid">
    <Nav />
     
       
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/research" component={Research} />
             
            </Switch>         
    
       
     
    </div>

            
        
        </div>
      </BrowserRouter>
    );
  }
}

export default App;