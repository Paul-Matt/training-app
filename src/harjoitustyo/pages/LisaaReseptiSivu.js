import React, { Component } from 'react';
import Otsikko from '../components/Otsikko';
import ReseptiLomake from '../components/ReseptiLomake';

class LisaaReseptiSivu extends Component {
  render() {
    return (
       <div>
			<Otsikko teksti="Lisää uusi resepti" />
			<ReseptiLomake />
	   </div>
    );
  }
}
export default LisaaReseptiSivu;