import React, { Component,Fragment } from 'react'
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home.jsx'
//import Pruebas from './pages/Pruebas.jsx'

class App extends Component {
  render() {
    return (
      <Fragment>
          <Home />
      </Fragment>
    );
  }
}

export default App
