import React from 'react';

class Navbar extends React.Component {
    render () {
        return(
            <nav className="navbar navbar-default">
                <div className="container-fluid d-flex justify-content-end">
                    <h1>About</h1>
                    <h1>Projects</h1>
                    <h1>Contact</h1>
                </div> 
            </nav>
        );
        }
    }

export default Navbar; 