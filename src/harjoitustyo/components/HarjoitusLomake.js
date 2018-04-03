import React, { Component } from 'react';
import { lisaaTreeniKantaan} from '../api/TreeniApi';

//class-tyyppinen, koska renderoi käyttöliittymää
class HarjoitusLomake extends Component {
	constructor(props) {
		super(props);
		/*metodit sidottava luokkaan bindilla tai nuolinotaatiolla*/
		this.muuta = this.muuta.bind(this);
		this.lisaa = this.lisaa.bind(this);
		this.state = {paiva: "", aktivoivat: "", maastaveto: "", askelkyykky: "", ylatalja: "", pystypunnerrus: "", 
		olankohautus: "", extrat: "", fiilis: ""};
		
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
		lisaaTreeniKantaan({paiva:this.state.paiva, aktivoivat:this.state.aktivoivat, maastaveto:this.state.maastaveto, 
		askelkyykky:this.state.askelkyykky, ylatalja: this.state.ylatalja, pystypunnerrus:this.state.pystypunnerrus, 
		olankohautus:this.state.olankohautus, extrat:this.state.extrat, fiilis:this.state.fiilis}, this.kasitteleLisays);
	}
	
	kasitteleLisays = (status) => {
		//tarkistaa että muuttujan tietotyypit ja arvot ovat samat joten kolme = merkkiä
		if (status === 200) {
			document.location='listaa';
		}
		else{
		alert(status);
		}
	}
	
	/*alla form:kun input-kenttä muuttuu, kutsutaan this-metodia, parametrina automaattisesti muuttuva event*/
  render() {
    return (
	<form>
	
		<label style={styles.labelStyle} htmlFor="paiva">Päivä</label><br />
		<input style={styles.inputStyle} type="text" value={this.state.paiva} 
		name="paiva" onChange={ 
		this.muuta } /><br />
		
		<label style={styles.labelStyle} 
		htmlFor="aktivoivat">Aktivoivat harjoitteet</label><br />
		<textarea style={styles.inputStyle} rows = "4" cols = "40"
		value={this.state.kuvaus} 
		name="aktivoivat" onChange={ 
		this.muuta }></textarea><br />
		
		<label style={styles.labelStyle} htmlFor="maastaveto">Sumomaastaveto</label><br />
		<input style={styles.inputStyle} type="text" value={this.state.maastaveto} 
		name="maastaveto" onChange={ 
		this.muuta } /><br />
	
		<label style={styles.labelStyle} htmlFor="askelkyykky">Askelkyykky</label><br />
		<input style={styles.inputStyle} type="text" value={this.state.askelkyykky} 
		name="askelkyykky" onChange={ 
		this.muuta } /><br />
		
		<label style={styles.labelStyle} htmlFor="ylatalja">Ylätalja</label><br />
		<input style={styles.inputStyle} type="text" value={this.state.ylatalja} 
		name="ylatalja" onChange={ 
		this.muuta } /><br />
		
		<label style={styles.labelStyle} htmlFor="pystypunnerrus">Pystypunnerrus</label><br />
		<input style={styles.inputStyle} type="text" value={this.state.pystypunnerrus} 
		name="pystypunnerrus" onChange={ 
		this.muuta } /><br />
		
		<label style={styles.labelStyle} htmlFor="olankohautus">Olankohautus</label><br />
		<input style={styles.inputStyle} type="text" value={this.state.olankohautus} 
		name="olankohautus" onChange={ 
		this.muuta } /><br />
		
		<label style={styles.labelStyle} 
		htmlFor="extrat">Muut liikkeet</label><br />
		<textarea style={styles.inputStyle} rows = "4" cols = "40"
		value={this.state.kuvaus} 
		name="extrat" onChange={ 
		this.muuta }></textarea><br />
		
		<label style={styles.labelStyle} 
		htmlFor="fiilis">Miten treeni sujui?</label><br />
		<textarea style={styles.inputStyle} rows = "4" cols = "40"
		value={this.state.kuvaus} 
		name="fiilis" onChange={ 
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
		width: '10em',
		display: 'block',
		float: 'left',
		margin: '10px',
		position: 'absolute',
	},
	inputStyle:{
		marginTop:'8px',
		border: '1px solid',
		borderRadius: '4px',
		},

}

export default HarjoitusLomake;
