import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "./translate/i18n.js";


ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
