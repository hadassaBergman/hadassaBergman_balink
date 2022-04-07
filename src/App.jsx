import React from 'react';
import './css/App.css';
import {BrowserRouter as Router, Link} from "react-router-dom";
import {Routing} from "./routing/Routing";


function App() {
    return (
        <Router>
            <Routing/>
        </Router>
    );
}
export default App;
