import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, NavLink} from'react-router-dom';
import Aikataulut from './components/Aikataulut';
import ListaaMerkinnatSivu from './pages/ListaaMerkinnatSivu';
import LisaaPaivakirjaMerkinta from './pages/LisaaPaivakirjaMerkinta';
import SaaSivu from './pages/SaaSivu';
import LisaaReseptiSivu from './pages/LisaaReseptiSivu';
/*tähän voisi lisätä myös kuntosaliharjoituspäiväkirjan, myöhemmin sitten lisätä puhelimesta askelmittarin tiedot */
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
		<NavLink exact to="/harjoitusaikataulut" activeClassName="active">Aikataulut</NavLink>&nbsp;
		<NavLink to="/harjoitus/listaa" activeClassName="active">Listaa sääpäiväkirjat</NavLink>&nbsp;
		<NavLink to="/harjoitus/lisaa" activeClassName="active">Lisaa sääpäiväkirjamerkintä</NavLink>&nbsp;
		<NavLink to="/harjoitus/saa" activeClassName="active">Sää</NavLink>&nbsp;
		<NavLink to="/harjoitus/lisaaResepti" activeClassName="active">Lisää resepti</NavLink>&nbsp;
			<Switch>
				<Route exact path="/harjoitus/aikataulut" component={Aikataulut} />
				<Route path="/harjoitus/listaa" component={ListaaMerkinnatSivu} />
				<Route path="/harjoitus/lisaa" component={LisaaPaivakirjaMerkinta} />		
				<Route path="/harjoitus/saa" component={SaaSivu} />
				<Route path="/harjoitus/lisaaResepti" component={LisaaReseptiSivu} />
			</Switch>
		</div>
	)
}

export default HarjoitusApp;
