import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';

const Header = () => {
    const navMenuItems = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><a href="https://form.jotform.com/223431326725451" target="_blank">Contact</a></li>
    </React.Fragment>
    return (
        <div className="navbar bg-base-100 p-6">
            <div className="navbar-start">
                <Link className="normal-case text-xl">
                    <img src={logo} className='w-20' alt="" />
                </Link>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navMenuItems}
                    </ul>
                </div>
            </div>
            <div className='navbar-end'>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navMenuItems}
                    </ul>
                </div>
                <a href='https://drive.google.com/file/d/1S3hWrxBHHFP5DBbLQb94BJ4ldGRZBBtk/view?usp=sharing' target="_blank" rel="noopener noreferrer" className="btn btn-primary">Resume</a>
            </div>
        </div>
    );
};

export default Header;