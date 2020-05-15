import React from 'react';
import { Link } from 'react-router-dom';

import "../styles/header.css";

class Header extends React.Component {
    render() {
        return(
            <ul id="header" className="nav container my-3 p-3">
                <Link style={{textDecoration: "none", color: "black"}} to="/"><li className="nav-item mx-2">Home</li></Link>
                <Link style={{textDecoration: "none", color: "black"}} to="/register"><li className="nav-item mx-2">Register</li></Link>
                <Link style={{textDecoration: "none", color: "black"}} to="/transactions"><li className="nav-item mx-2">Transactions</li></Link>
            </ul>
        )
    }
}

export default Header;