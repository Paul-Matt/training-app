import React from 'react';
import Treeni from './Treeni';
//käy Treenitaulukon listan läpi käyttäen Treeni-komponenttia kunkin yksittäisen treenin läpikäymiseen
function Treenilista (props) {
	let treenit = props.treenit.map(function(treeni, index){
		return (<Treeni treeni={treeni} key={index} />)
	});
	return (<div>{treenit}</div>);
}

export default Treenilista;