import React from 'react';
import "./App.css";
import { BrowserRouter, Route } from 'react-router-dom';
import Navbara from './components/Navbar/Navbara';
import Accueil from './components/Accueil/Accueil';
import Apropos from './components/Apropos';
import Liste from './components/Liste';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbara/>
          <Route exact path="/" component={Accueil}/>
          <Route       path="/apropos" component={Apropos}/>
          <Route       path="/liste" component={Liste}/>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
