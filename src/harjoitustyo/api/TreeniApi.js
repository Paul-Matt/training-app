const url = 'http://localhost:8080';

//ei tee käyttöliittymää, joten funktio
//haetaan matkat fetchillä
//saa callbackin, joka käsittelee palvelun vastauksen
//callback ei ota kantaa siihen mikä käsittelee, kunhan käsittelee
export function haeKaikkiTreenit(callback){
	fetch(url +"/treeni/all", {
		method: "GET"
	})
	//vastaus laitetaan jsoniksi
	.then ((response) => response.json())
	//kun json-muodossa, kutsutaan funktiota
	.then ((responseJson) => {
		//kutsu callback-funktiota, välitä response ja responsestatus
		callback(responseJson, responseJson.status);
	})
	.catch(function(error) {
		callback(null, 503);
	})
}	
	//callback käsittelee kannanlisäyksen tuloksen
export function lisaaTreeniKantaan(treeni, callback) {
	fetch(url +"/treeni/add", {
		//tiedot tulee lomakkeelta joten post, viedään kantaan
		method: "POST",
		headers: {'Content-Type': 'application/json'},
		//muutetaan verkkoliikenteen ajaksi merkkijonoksi
		body: JSON.stringify(treeni)
	})
	.then (function (response){
		callback(response.status);
	})
	.catch(function(error) {
		callback(null, 503);
	})
}