import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route path="/sobre" render={props => <div>Sobre</div>} />
        <Route path="/galeria" render={props => <div>Galeria</div>} />
        <Route path="/contato" render={props => <div>Contato</div>} />
        <Route path="/cadastro" render={props => <div>Cadastro</div>} />
      </Switch>
    </div>
  );
}

export default App;
