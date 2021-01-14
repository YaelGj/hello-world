nimport React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

import Menu from './views/Menu';
import Footer from './views/Footer';
import App from './views/App';
import Contact from './views/Contact';
import Carte from './views/Carte';
import Connexion from './views/Connexion';

import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

const Root = () => {
  return (
      <Router>
        <Menu />
        <Switch>
          <Route exact path='/' component={App} />
          <Route exact path='/carte' component={Carte} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/connexion' component={Connexion} />
        </Switch>
        <Footer />
      </Router>
  )
}



ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
