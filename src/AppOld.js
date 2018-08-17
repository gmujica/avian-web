import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home.jsx'
//import About from './pages/About.jsx'
//import Packages from './pages/Packages.jsx'
//import Promotions from './pages/Promotions.jsx'
//import Contact from './pages/Contact.jsx'
import Pruebas from './pages/Pruebas.jsx'

/*
<Route exact path="/About" component={About} />
<Route exact path="/Packages" component={Packages} />
<Route exact path="/Promotions" component={Promotions} />
<Route exact path="/Contact" component={Contact} />
<Route exact path="/Pruebas" component={Pruebas} />
*/

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/Pruebas" component={Pruebas} />
        </div>
      </Router>
    );
  }
}

export default App;
