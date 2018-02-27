import React, { Component } from 'react';
import Otsikko from '../components/Otsikko';
import HarjoitusLomake from '../components/HarjoitusLomake';

class LisaaTreeni extends Component {
  render() {
    return (
       <div>
			<Otsikko teksti="Lisää treenipäiväkirjamerkintä" />
			<HarjoitusLomake />
	   </div>
    );
  }
}
export default LisaaTreeni;