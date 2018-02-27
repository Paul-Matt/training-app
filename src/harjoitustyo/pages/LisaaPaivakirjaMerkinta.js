import React, { Component } from 'react';
import Otsikko from '../components/Otsikko';
import HarjoitusLomake from '../components/HarjoitusLomake';

class LisaaPaivakirjaMerkinta extends Component {
  render() {
    return (
       <div>
			<Otsikko teksti="Lisää sääpäiväkirjamerkintä" />
			<HarjoitusLomake />
	   </div>
    );
  }
}
export default LisaaPaivakirjaMerkinta;