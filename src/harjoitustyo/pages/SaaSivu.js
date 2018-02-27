import React, { Component } from 'react';

class Saa extends Component {
  constructor (props) {
      super(props);
	  //saisikohan tähän myös päivämäärän, ja tiedot kopioitua lomakkeelle valmiiksi?
      this.state = {kuvaus: "", lampotila: "", kaupunki: "", kuva: "", tuuli: ""};
  }
    
  componentDidMount = () => {
    fetch("http://api.openweathermap.org/data/2.5/weather?lang=fi&lat=60.17&lon=24.94&units=metric&APPID=d5b90572527dacb3aded67a6140e50d0")     
        .then((response) => response.json())     
        .then((responseJson) => { 
             this.setState({
				 kuvaus: responseJson.weather[0].description,
				 kaupunki: responseJson.name,
				 lampotila: responseJson.main.temp,
				 tuuli: responseJson.wind.speed,
				 kuva: "http://api.openweathermap.org/img/w/" + 
				 responseJson.weather[0].icon
			 });   
        })      
        .catch((error) => {       
            console.error(error); 
           
        })  
  }
    
  render() {
    return (
      <div>
        <h3>{this.state.kaupunki}</h3>
		<img align="middle" src={this.state.kuva} alt="" /><br />
		{this.state.lampotila} &#8451;<br />
		{this.state.kuvaus} <br />
		{this.state.tuuli} m/s
      </div>
    );
  }
}

export default Saa;