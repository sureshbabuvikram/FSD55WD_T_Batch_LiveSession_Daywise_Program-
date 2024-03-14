import React from 'react';
import { Link } from 'react-router-dom';

const NavbarTask = () => {
    return (
        <div>
            <nav>
            <Link  to='/'> ALL</Link>
            <Link to='/fullstack'> FULLSTACK DEVELOPMENT</Link>
            <Link to='/datascience'> DATA SCIENCE</Link>
            </nav>
        </div>
    );
};

export default NavbarTask;