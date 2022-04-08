import React from 'react';
import './css/App.css';
import {BrowserRouter as Router, Link} from "react-router-dom";
import {Routing} from "./routing/Routing";
import './translate/i18n.js';

function App() {

    return (
        <Router>
            <Routing/>
        </Router>
    );
}
export default App;
