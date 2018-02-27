import React, { Component } from 'react';
//tähän voisi tehdä esim.sääpäiväkirjalomakkeen?
//class-tyyppinen, koska renderoi käyttöliittymää
class HarjoitusLomake extends Component {
	constructor(props) {
		super(props);
		/*metodit sidottava luokkaan bindilla tai nuolinotaatiolla*/
		this.muuta = this.muuta.bind(this);
		this.lisaa = this.lisaa.bind(this);
		this.state = {paiva: "", paikka: "", saa: "", kuvaus: ""};
		
	}
	/*e.targetname--> hae otsikko, e target value-->hae elementti*/
	muuta (e) {
		this.setState({[e.target.name]: e.target.value});
	}
	
	/* muuta-metodi nuolinotaatiolla:  muuta = (e) => {
	}		*/
	
	/*estetään lähetys palvelimelle, jos tehdään kantaan lisäystä esimerkiksi*/
	
	lisaa (e){
		e.preventDefault();
	}
	/*alla form:kun input-kenttä muuttuu, kutsutaan this-metodia, parametrina automaattisesti muuttuva event*/
  render() {
    return (
	<form>
		
		<label style={styles.labelStyle} htmlFor="paiva">Päivä</label><br />
		<input style={styles.inputStyle} type="text" value={this.state.paiva} 
		name="paiva" onChange={ 
		this.muuta } /><br />
		
		<label style={styles.labelStyle} htmlFor="paikka">Paikka</label><br />
		<input style={styles.inputStyle} type="text" value={this.state.paikka} 
		name="paikka" onChange={ 
		this.muuta } /><br />
	
		<label style={styles.labelStyle} htmlFor="saa">Sää</label><br />
		<input style={styles.inputStyle} type="text" value={this.state.saa} 
		name="saa" onChange={ 
		this.muuta } /><br />
		
		<label style={styles.labelStyle} 
		htmlFor="kuvaus">Kuvaus</label><br />
		<textarea style={styles.inputStyle} rows = "4" cols = "40"
		value={this.state.kuvaus} 
		name="kuvaus" onChange={ 
		this.muuta }></textarea><br /><br />
		
		<input type="submit" value="Lisää" onClick={ this.lisaa } />
	</form>
    );
  }
}
 /*yllä onclick kutsuu liaää-metodia*/
/*constilla tehdyn objektin sisältöä voi muuttaa*/
/* labelit vas suoraan, kentät oikeaan*/
/*sidottava labeleihin, jos ei ole tehty ulkoiseen tyylitiedostoon*/
const styles = {
	labelStyle: {
		width: '6em',
		display: 'block',
		float: 'left',
		margin: '8px',
		position: 'absolute',
	},
	inputStyle:{
		marginTop:'8px',
		border: '1px solid',
		borderRadius: '4px',
		},

}

export default HarjoitusLomake;
