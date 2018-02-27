import React, { Component } from 'react';

//class-tyyppinen, koska renderoi käyttöliittymää
class ReseptiLomake extends Component {
	constructor(props) {
		super(props);
		/*metodit sidottava luokkaan bindilla tai nuolinotaatiolla*/
		this.muuta = this.muuta.bind(this);
		this.lisaa = this.lisaa.bind(this);
		this.state = {nimi: "", aineet: "", ohjeet: ""};
		
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
		
		<label style={styles.labelStyle} htmlFor="nimi">Reseptin nimi</label><br />
		<input style={styles.inputStyle} type="text" value={this.state.nimi} 
		name="nimi" onChange={ 
		this.muuta } /><br />
				
		<label style={styles.labelStyle} htmlFor="aineet">Määrät ja aineet</label><br />
		<textarea style={styles.inputStyle} rows = "10" cols = "40"
		value={this.state.aineet} 
		name="aineet" onChange={ 
		this.muuta }></textarea><br />
	
		<label style={styles.labelStyle} 
		htmlFor="ohjeet">Ohjeet</label><br />
		<textarea style={styles.inputStyle} rows = "20" cols = "40"
		value={this.state.ohjeet} 
		name="ohjeet" onChange={ 
		this.muuta }></textarea><br /><br />
		
		<input type="submit" value="Lisää" onClick={ this.lisaa } />
	</form>
    );
  }
}
 /*yllä onclick kutsuu lisää-metodia*/
/*constilla tehdyn objektin sisältöä voi muuttaa*/
/* labelit vas suoraan, kentät oikeaan*/
/*sidottava labeleihin, jos ei ole tehty ulkoiseen tyylitiedostoon*/
const styles = {
	labelStyle: {
		width: '10em',
		display: 'block',
		float: 'left',
		margin: '8px',
		position: 'absolute',
	},
	inputStyle:{
		marginTop:'8px',
		marginLeft: '7px',
		border: '1px solid',
		borderRadius: '4px',
		},

}

export default ReseptiLomake;
