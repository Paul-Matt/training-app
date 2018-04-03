import React, { Component } from 'react';
import Treenilista from './Treenilista';
//kaarisulut, koska löytyy useampi komponentti, kerrotaan mikä otetaan käyttöön
//hakee kannasta treenitaulukon, siitä treenilistaan
import { haeKaikkiTreenit } from '../api/TreeniApi';


class Treenitaulukko extends Component {
	constructor (props){
		super(props);
		this.state = {treenit: []};
	}
	
	//tämä on se paikka, josta kutsutaan palvelua
	componentDidMount = () => {
		//treeniAppissa haeKaikkiTreenit
		//this.kasitteleVastaus on callback
		//funktio, joka käsittelee haeKaikkiTreenit arvon, välitetään parametrina, tyypillistä javascriptille
		//tätä voi mikä tahansa nyt käyttää, vaihdat vaan callbackin sulkuihin
		haeKaikkiTreenit(this.kasitteleVastaus);
	}
	
	kasitteleVastaus = (data, status) => {
		//alert (status);
		//saa datan haeKaikkiTreenit:sta
		//riippuu mitä saa TreeniApista
		if (status != 503) {
			//stateen ladataan data jos sitä saatiin
			this.setState({treenit:data});
		}
	}
	
  render() {
    return (
      <div>
		<Treenilista treenit = {this.state.treenit} />  
      </div>
    );
  }
}

export default Treenitaulukko;
