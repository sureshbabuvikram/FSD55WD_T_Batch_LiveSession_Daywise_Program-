import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
   
    return (
        <div>
            <nav>
             <Link to='/' > Home </Link>
            <Link to='/about' > About </Link>
            <Link to='/contact' > Contact </Link>
            <Link to='/user' > User </Link>
            <Link to='/product' > Product </Link>   

{/* //css features */}
            {/* <NavLink to='/'  >Home</NavLink>  
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/user'>User</NavLink>
            <NavLink to='/product'>Product</NavLink> */}
            </nav>
          
        </div>
    );
};

export default Navbar;