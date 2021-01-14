import logo from '../logo/logo.png';
import '../css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Accueil</h2>
        <p>
          Help'Other est une application web et mobile permettant de répertorier des dégradations, ou des personnes dans 
          le besoin dans une ville (Lyon pour commencer), et de permmettre aux mairies d'envoyer des équipes de nettoyage
          et de rénovation pour a terme, vivre dans une ville plus propre.
          <br/>
          <br/>
          Pour ce qui est des personnes dans le besoin, différentes associations pourront consulter la carte de notre 
          application, pour pouvoir mieux organiser leurs "maraude"(marche nocturne de bénévole), et ducoup venir en aide
          aux personnes répertoriées sur la carte.
        </p>
      </header> 
    </div>
  );
}

export default App;
