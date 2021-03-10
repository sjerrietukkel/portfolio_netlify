import React from 'react';
import { Link } from "react-router-dom"

class Header extends React.Component {
    render () {
        return(
            <nav className="navbar navbar-default">
                <div className="container-fluid d-flex justify-content-end">
                    <Link className="links" to="/">Home</Link>
                    <Link className="links" to="/about">About</Link>
                </div> 
            </nav>
        );
        }
    }

export default Header; 