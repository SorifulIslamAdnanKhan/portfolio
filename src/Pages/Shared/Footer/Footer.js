import React from 'react';
import logo from '../../../assets/images/logo.png';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="footer footer-center bg-stone-100 p-10">
            <div>
                <img src={logo} className='w-20' alt="" />
                <p>Copyright © 2022 - All right reserved</p>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a href='https://github.com/SorifulIslamAdnanKhan' target="_blank"><FaGithub className='text-xl'></FaGithub></a>
                    <a href='https://www.linkedin.com/in/soriful-islam-adnan/' target="_blank"><FaLinkedin className='text-xl'></FaLinkedin></a>
                    <a href='https://twitter.com/adnankhan7792' target="_blank"><FaTwitter className='text-xl'></FaTwitter></a>    
                </div>
            </div>
        </footer>
    );
};

export default Footer;