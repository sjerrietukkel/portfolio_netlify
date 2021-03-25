import React from 'react';
import { Link } from "react-router-dom"
import { Nav, NavLink } from "./styled/Header"
import logo from '../logo.png'; // Tell webpack this JS file uses this image

class Header extends React.Component {
    render () {
        return(
            <Nav className="navbar navbar-default sticky-top">
                <div className="container-fluid d-flex justify-content-between nav-max">
                    <div>
                        <Link className="links" to="/"><img src={logo} alt="Logo" className="logo" /></Link>
                    </div>
                    <div className="d-flex header-links">
                        <Link className="links" to="/about"><NavLink>About</NavLink></Link>
                        <Link className="links" to="/"><NavLink>Cases</NavLink></Link>
                    </div>
                </div> 
            </Nav>
        );
        }
    }

export default Header; 