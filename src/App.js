import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import './css/styles.css'
import Navbar from './components/navbar';
import Home from './components/home';
import Actors from './components/actors';
import Actress from './components/actress';
import Films from './components/films';
import ActorsContainer from './components/actorsContainer';

class App extends Component {
 render() {
   return(
    <BrowserRouter>
      <div className="App">
        <Navbar title="Oscars 2020" />
        {/* <Route to="/" exact component={ Home } /> */}
        <Route exact path="/" render={() =>  <Home title="Oscar Winners" /> } />
        <Route path="/actors" render={ () => <ActorsContainer title="Best Actors" /> } />
        <Route path="/actress" component={ Actress }/>
        <Route path="/films" component= { Films } /> 
       
      </div>
    </BrowserRouter>
    );
 }
}

export default App;
