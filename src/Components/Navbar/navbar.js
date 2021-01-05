import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <Link to='/'><h1>Logo</h1></Link>
            </div>

            <div className="NavItemContainer">
                <Link to='/category'>
                    <div className="NavItem"><h4>Categories</h4></div>
                </Link>
                <Link to="/authentication">
                    <div><h4>Authetication Page</h4></div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
