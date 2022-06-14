import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/reviews">Reviews</Link>
            </li>
            <li> 
                <Link to="/categories">Review Categories</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
        </div>
    )
}

export default Navbar;