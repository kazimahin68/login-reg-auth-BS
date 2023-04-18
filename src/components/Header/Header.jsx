import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container mx-auto w-100 text-center fw-bold fs-3'>
            <Link className='me-3 text-decoration-none' to='/'>Home</Link>
            <Link className='me-3 text-decoration-none' to='/login'>Login</Link>
            <Link className='text-decoration-none' to='/register'>Register</Link>
        </div>
    );
};

export default Header;