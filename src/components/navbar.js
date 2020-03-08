import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends React.Component 
{

    constructor()
    {
        super()

        this.state = { active: false }
    }

    render()
    {

        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to='/' className="navbar-brand">ExerTracker</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" exact className='nav-link' activeClassName="active">Exercises</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/create" exact className='nav-link' activeClassName="active">Create Exercise Log</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/user" exact className='nav-link' activeClassName="active">Create User</NavLink>
                        </li>

                    </ul>
                </div>
            </nav>
        )
    }



    /*<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to='/' className="navbar-brand">ExerTracker</Link>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                    <Link to="/" className="nav-link">Exercises</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/create" className="nav-link">Create Exercise Log</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/user" className="nav-link">Create User</Link>
                </li>
            </ul>
        </div>

    </nav>*/
}

export default Navbar;