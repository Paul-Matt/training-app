import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, NavLink} from'react-router-dom';
import Askeleet from './components/Askeleet';
import ListaaMerkinnatSivu from './pages/ListaaMerkinnatSivu';
import LisaaTreeni from './pages/LisaaTreeni';
class HarjoitusApp extends Component {
  render() {
    return (
      <BrowserRouter>
	  <Layout />
	  </BrowserRouter>
    );
  }
}

function Layout(){
	return (
		<div>
		<NavLink exact to="/harjoitus/askeleet" activeClassName="active">Askeleet</NavLink>&nbsp;
		<NavLink to="/harjoitus/listaa" activeClassName="active">Listaa treenipäiväkirjat</NavLink>&nbsp;
		<NavLink to="/harjoitus/lisaa" activeClassName="active">Lisaa treenipäiväkirjamerkintä</NavLink>&nbsp;
			<Switch>
				<Route exact path="/harjoitus/askeleet" component={Askeleet} />
				<Route path="/harjoitus/listaa" component={ListaaMerkinnatSivu} />
				<Route path="/harjoitus/lisaa" component={LisaaTreeni} />		
			</Switch>
		</div>
	)
}

export default HarjoitusApp;
