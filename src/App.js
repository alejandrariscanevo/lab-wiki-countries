import React, {Component} from 'react'
import './App.css';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import {Switch, Route} from './react-router-dom'

class App extends Component  {

  state = {
    singleCountry: []

  }
  render(){
  return ( 
    <div className="App">
     <NavBar />
     <div class="container">
     <div class= "row">
     <CountriesList />
     <Switch>
       <Route exact path = "/:countrycode" component={()=> <CountryDetails infoCountry={this.state.singleCountry}/>}/>
     </Switch>
      </div>
     </div>
     </div>  
  );
}
}
export default App;
