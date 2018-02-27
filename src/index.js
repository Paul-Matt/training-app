import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HarjoitusApp from './harjoitustyo/HarjoitusApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HarjoitusApp />, document.getElementById('root'));
registerServiceWorker();
