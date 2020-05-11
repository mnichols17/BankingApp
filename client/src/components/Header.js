import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return(
            <ul className="nav">
                <li className="nav-item mx-2">
                    <Link to="/">Home</Link>
                </li>
                {/* At some point have to add a conditional for wheter user is logged in show Account/Register */}
                <li className="nav-item mx-2">
                    <Link to="/profile/10">Account</Link>
                </li>
                <li className="nav-item mx-2">
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        )
    }
}

export default Header;