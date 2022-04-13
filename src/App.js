import React from 'react';
import Navbar from './components/Navbar';
import './App.css'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Experiences from './components/pages/Experiences';
import Portfolio from './components/pages/Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Modal from 'react-modal';
 

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/experiences' exact component={Experiences} />
          <Route path='/portfolio' exact component={Portfolio} />
      </Switch>
    </Router>
  );
}

export default App;
