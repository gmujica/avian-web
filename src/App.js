import React, { Component,Fragment } from 'react'
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home.jsx'


class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="App">
          <Home />
        </div>
      </Fragment>
    );
  }
}

export default App;
