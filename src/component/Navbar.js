// import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


export default function Navbar(props) {

    return (
        <div>
            <div> 
                <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">{props.home}</Link> 
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" to="/about">{props.about}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/">{props.carrier}</a>
                                </li>
                               
                            </ul>
                            <form className={`d-flex text-${props.mode==="dark"?"light":"dark"}`} role="search">
                                {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-primary" type="submit">Search</button> */}

                                 <Form.Check 
                                     type="switch"
                                     id="custom-switch"
                                     label="Enable mode"
                                     onClick={props.toggleMode}
                                    />    
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

    )
   
  
}
Navbar.propTypes ={home: PropTypes.string.isRequired,
    about:PropTypes.string.isRequired,
carrier:PropTypes.string.isRequired}

Navbar.defaultProps = {home:"set Home here",
about:"set Abot here",
carrier:"set carrier here"}

