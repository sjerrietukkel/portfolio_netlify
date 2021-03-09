import React, { PropTypes } from 'react';
import './Navbar.css';
import { H1, Main } from './styled.js'

class Navbar extends React.Component {
    render () {
        return(
            <nav className="navbar navbar-default">
                {/* <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#top">Dessert Journal</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><a href="#desserts">Desserts</a></li>
                        <li><a href="#contact">Contact us</a></li>
                    </ul>
                </div> */}
                <Main className="container-fluid d-flex justify-content-end">
                    <H1>About</H1>
                    <H1>Projects</H1>
                    <H1>Contact</H1>
                </Main> 
            </nav>
        );
        }
    }

export default Navbar; 