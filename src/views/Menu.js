import React from 'react';
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import '../css/Menu.css';
import logo from '../logo/logo.png';

const YourApp = () => {
  return (
  <div id="header">
    <img src={logo} className="App-logo" alt="logo" /> 
    <h1>Help'Other</h1>     
    <nav>        
        <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/carte">Carte</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li style={{float: 'right'}} ><Link to="/connexion">Se Connecter</Link></li>
        </ul>   
    </nav>
  </div>
  );
}

export default YourApp;