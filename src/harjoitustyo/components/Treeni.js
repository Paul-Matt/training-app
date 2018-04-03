import React from 'react';
function Treeni(props){
	return (
	<div>
		Päivä: { props.treeni.paiva}<br />
		Aktivoivat: { props.treeni.aktivoivat}<br />
		Maastaveto: { props.treeni.maastaveto}<br />
		Askelkyykky: { props.treeni.askelkyykky}<br />
		Ylätalja: { props.treeni.ylatalja}<br />
		Pystypunnerrus: { props.treeni.pystypunnerrus}<br />
		Olankohautus: { props.treeni.olankohautus}<br />
		Muut liikkeet: { props.treeni.extrat}<br />
		Fiilis:{ props.treeni.fiilis} <br /><br />
	</div>
	);
}

export default Treeni;