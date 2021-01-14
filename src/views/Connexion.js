import '../css/App.css';
import React from 'react';
import * as fromApiUsers from '../api/users';

class Connexion extends React.Component{
  constructor(props){
    super(props)
    this.state={
      users: []
    }
  }

  async componentDidMount(){
    
  }
  
  handleChange(e){
    e.preventDefault()
    let name = e.target.name
    this.setState({
      [name]: e.target.value
    },() => console.log("callback", this.state))
    console.log(this.state)
  }

  async handleClick(e){
    const users = await fromApiUsers.getUsers()
    this.setState({
      users: users
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h2>Connexion</h2>
          <p>
              Ici, nous aurons une page de connexion, pour soit s'identifier comme un :<br/>
                - Citoyen et pouvoir signaler des dégradations<br/>
                - Agent de la mairie (le personnel de la mairie et les techniciens)<br/>
                - Association pour pouvoir déclarer un point de collecte, et indiquer une maraude (trajet et date de celle-ci)<br/>
            </p> 
            <br/>
              <div>
                <input type="text" id="identifiant" name="identifiant" placeholder="Identifiant" onChange={(e) => this.handleChange(e)}/>            
                <input type="password" id="mdp" name="mdp" placeholder="Mot de passe" onChange={(e) => this.handleChange(e)}/>
                <input type="button" value="Connexion" onClick={(e) => this.handleClick(e)}/>              
              </div>
              <ul>
                {
                  this.state.users.map((u,i) => {
                    return (<li>{u.name}</li>)
                  })
                }
              </ul>
             
        </header>
      </div>
    );
  }

}  
  export default Connexion;