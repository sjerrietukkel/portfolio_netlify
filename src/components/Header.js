import React from 'react';
import { Link } from "react-router-dom"
import { Nav, NavLink } from "./styled/Header"

class Header extends React.Component {
    render () {
        return(
            <Nav className="navbar navbar-default">
                <div className="container-fluid d-flex justify-content-end">
                    <Link className="links" to="/"><NavLink>Home</NavLink></Link>
                    <Link className="links" to="/about"><NavLink>About</NavLink></Link>
                </div> 
            </Nav>
        );
        }
    }

export default Header; 