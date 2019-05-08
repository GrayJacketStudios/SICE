import React from 'react';


import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';

import inicio from './pages/inicio';
import mapaPage from './pages/mapa';
import progEventos from './pages/progEventos';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar title='SICE prototype'/>
        <div className="body">
          <Route exact path='/' component={inicio}/>
          <Route path='/mapa' component={mapaPage}/>
          <Route path='/eventos' component={progEventos}/>
        </div>
        
      </Router>
    </div>
  );
}

export default App;
